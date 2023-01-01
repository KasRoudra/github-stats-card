import { Request, Response } from "express";
import fetch from "cross-fetch";
import langCard from "../cards/langCard";
import errorCard from "../cards/errorCard";
import themes from "../themes";
import { language, langResponse } from "../interfaces";
import { parseColor, makeRound, layouts, types } from "../utils";

const token = process.env.TOKEN;

const langHandler = async (req: Request, res: Response) => {
  try {
    const username = req.query.user;
    const theme = themes[req.query.theme as string] || themes["default"];
    const layout = layouts[req.query.layout as string] || "default";
    const type = types[req.query.type as string] || "linear";
    let max_lang: string | number = req.query.max_lang as string;
    let height: string | number = req.query.height as string;
    const width = (req.query.width as string) || "480";
    const scale = (req.query.scale as string) || "1";
    const sort = req.query.sort as string;
    const minimum = req.query.minimum || 0.2;
    const exclude_lang = req.query.exclude_lang as string;
    const exclude_repo = req.query.exclude_repo as string;
    const hcolor = parseColor(req.query.hcolor as string) || theme.hcolor;
    const color = parseColor(req.query.color as string) || theme.color;
    const bgcolor = parseColor(req.query.bgcolor as string) || theme.bgcolor;
    const bdcolor = parseColor(req.query.bdcolor as string) || theme.bdcolor;
    const bdwidth = (req.query.bdwidth as string) || "1";
    const queryGrads = req.query.bggrad as string;
    const grads = queryGrads
      ? queryGrads.includes(",")
        ? queryGrads.split(",")
        : [queryGrads]
      : [];
    let hashedGrads = [];
    for (let grad of grads) {
      hashedGrads.push(parseColor(grad));
    }
    const finalGrad = hashedGrads.join(",");
    const bggrad = grads ? "linear-gradient(" + finalGrad + ")" : "none";
    const excluded_langs = exclude_lang
      ? exclude_lang.includes(",")
        ? exclude_lang.split(",")
        : [exclude_lang]
      : [];
    const excluded_repos = exclude_repo
      ? exclude_repo.includes(",")
        ? exclude_repo.split(",")
        : [exclude_repo]
      : [];
    const query = {
      query: `
            query {
              user(login: "${username}") {
                name
                login
                repositories(
                  first: 100
                  ownerAffiliations: OWNER
                  orderBy: { direction: DESC, field: STARGAZERS }
                  isFork: false
                ) {
                  totalCount
                  nodes {
                    name
                    languages(
                      first: 5, 
                      orderBy: { direction: DESC, field: SIZE }
                    ) {
                      nodes {
                        name
                        color
                      }
                      edges {
                          size
                      }
                      totalCount
                    }
                  }
                }
              }
           }
           `,
    };
    res.set({ "Content-Type": "image/svg+xml" });
    if (username && token) {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(query),
      })
        .then((resp) => resp.json())
        .then((response: langResponse) => {
          if (response.data) {
            const user = response.data.user;
            if (user) {
              const name = user.name || user.login;
              const repos = user.repositories;
              const repoLength = repos.nodes.length;
              const langs = {};
              for (let i = 0; i < repoLength; i++) {
                const repo = repos.nodes[i].languages;
                const repoName = repos.nodes[i].name;
                if (!excluded_repos.includes(repoName)) {
                  for (let j = 0; j < repo.nodes.length; j++) {
                    const nodes = repo.nodes[j];
                    const edges = repo.edges[j];
                    if (!excluded_langs.includes(nodes.name)) {
                      if (!langs[nodes.name]) {
                        langs[nodes.name] = {
                          name: nodes.name,
                          color: nodes.color,
                          size: edges.size,
                        };
                      } else {
                        langs[nodes.name].size += edges.size;
                      }
                    }
                  }
                }
              }
              let total = 0;
              for (let lang in langs) {
                total += langs[lang].size;
              }
              for (let lang in langs) {
                let percentage1 = (langs[lang].size / total) * 100;
                const percentage = makeRound(percentage1);
                langs[lang] = { ...langs[lang], percentage };
                if (langs[lang].percentage < minimum) delete langs[lang];
              }
              const langsArray: Array<language> = Object.values(langs);
              if (!height) {
                layout === "compact"
                  ? type === "linear"
                    ? (height = 210 + langsArray.length * 25)
                    : (height = 410 + langsArray.length * 25)
                  : (height = 180 + langsArray.length * 60);
              }
              if (sort === "asc")
                langsArray.sort((x, y) => x.percentage - y.percentage);
              if (sort === "desc")
                langsArray.sort((x, y) => y.percentage - x.percentage);
              max_lang = parseInt(max_lang as string);
              if (!max_lang || max_lang > langsArray.length)
                max_lang = langsArray.length;
              langsArray.length = max_lang;
              let sum = 0;
              for (let elem of langsArray) {
                sum += elem.percentage;
              }
              if (langsArray.length !== 0) {
                const min = langsArray.reduce((one, two) =>
                  one.percentage < two.percentage ? one : two
                );
                if (sum < 100)
                  langsArray[langsArray.indexOf(min)].percentage = makeRound(
                    100 - sum + min.percentage
                  );
                if (sum > 100)
                  langsArray[langsArray.indexOf(min)].percentage = makeRound(
                    sum - 100 + min.percentage
                  );
                res.send(
                  langCard(
                    width,
                    height,
                    scale,
                    layout,
                    type,
                    name,
                    langsArray,
                    hcolor,
                    color,
                    bgcolor,
                    bdcolor,
                    bdwidth,
                    bggrad
                  )
                );
              } else {
                res.send(errorCard("No languages available!"));
              }
            } else if (response.errors) {
              res.send(errorCard(response.errors[0].message));
            } else {
              res.send(errorCard("Origin 1: Unknown error occured!"));
            }
          } else if (response.errors) {
            res.send(errorCard(response.errors[0].message));
          } else if (response.message) {
            res.send(errorCard(response.message));
          } else if (!response) {
            res.send(errorCard("Empty response, probably wrong URL"));
          } else {
            res.send(errorCard("Origin 2: Unknown error occured!"));
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.message) {
            res.send(errorCard(err.message));
          } else {
            res.send(errorCard(JSON.stringify(err)));
          }
        });
    } else if (!username) {
      res.send(errorCard("No username!"));
    } else if (!token) {
      res.send(errorCard("No token!"));
    } else {
      res.send(errorCard("Origin 3: Unknown error occured!"));
    }
  } catch (err) {
    console.log(err);
    if (err.message) {
      res.send(errorCard(err.message));
    } else {
      res.send(errorCard(JSON.stringify(err)));
    }
  }
};

export default langHandler;
