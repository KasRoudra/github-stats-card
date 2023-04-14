import { Request, Response } from "express";
import fetch from "cross-fetch";
import repoCard from "../cards/repoCard";
import errorCard from "../cards/errorCard";
import themes from "../themes";
import { repoResponse } from "../interfaces";
import {
  parseString,
  parseNumber,
  parseColor,
  capitalize,
  layouts,
} from "../utils";

const token = process.env.TOKEN;

const repoHandler = async (req: Request, res: Response) => {
  try {
    const username = req.query.user;
    const reponame = req.query.repo;
    const theme = themes[req.query.theme as string] || themes["default"];
    const layout = layouts[req.query.layout as string] || layouts["default"];
    const include_username = req.query.include_username;
    const cap_name = req.query.cap_name || "true";
    const show_stat = req.query.show_stat as string;
    const hide_stat = req.query.hide_stat as string;
    const hide_zero = req.query.hide_zero;
    const hide_lang = req.query.hide_lang as string;
    const width =
      (req.query.width as string) || "370";
    const height =
      (req.query.height as string) || (layout === "compact" ? "220" : "280");
    const scale = (req.query.scale as string) || "1";
    const hcolor = parseColor(req.query.hcolor as string) || theme.hcolor;
    const color = parseColor(req.query.color as string) || theme.color;
    const bgcolor = parseColor(req.query.bgcolor as string) || theme.bgcolor;
    const bdcolor = parseColor(req.query.bdcolor as string) || theme.bdcolor;
    const bdwidth = (req.query.bdwidth as string) || "1";
    const queryGrads = req.query.bggrad as string;
    const included_stats = show_stat
      ? show_stat.includes(",")
        ? show_stat.split(",")
        : [show_stat]
      : [];
    const excluded_stats = hide_stat
      ? hide_stat.includes(",")
        ? hide_stat.split(",")
        : [hide_stat]
      : [];
    const excluded_langs = hide_lang
      ? hide_lang.includes(",")
        ? hide_lang.split(",")
        : [hide_lang]
      : [];
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
    const bggrad = finalGrad ? "linear-gradient(" + finalGrad + ")" : "none";
    const query = {
      query: `
            query {
              user(login: "${username}") {
                name
                login
                repository(
                  name: "${reponame}"
                ) {
                  name
                  nameWithOwner
                  description
                  defaultBranchRef{
                    target{
                        ... on Commit{
                            history(first:100){
                               totalCount
                               edges{
                                   node{
                                       additions
                                       deletions
                                   }
                               }
                            }
                         }
                      }
                  }
                  stargazers {
                      totalCount
                  }
                  forks {
                      totalCount
                  }
                  watchers {
                      totalCount
                  }
                  issues {
                      totalCount
                  }
                  pullRequests {
                      totalCount
                  }
                  languages(
                    first: 5
                    orderBy: { direction: DESC, field: SIZE }
                    ) {
                      nodes {
                          name
                          color
                      }
                  }
                }
              }
           }
           `,
    };
    res.set({ "Content-Type": "image/svg+xml" });
    if (token && username && reponame) {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(query),
      })
        .then((resp) => resp.json())
        .then((response: repoResponse) => {
          if (response.data) {
            const user = response.data.user;
            if (user && user.repository) {
              const repo = user.repository;
              let starCount = parseNumber(repo.stargazers.totalCount);
              let forkCount = parseNumber(repo.forks.totalCount);
              let watcherCount = parseNumber(repo.watchers.totalCount);
              let issueCount = parseNumber(repo.issues.totalCount);
              let prCount = parseNumber(repo.pullRequests.totalCount);
              const name = include_username
                ? repo.nameWithOwner
                : cap_name === "true"
                ? capitalize(repo.name)
                : repo.name;
              const description = repo.description
                ? repo.description.length > 120
                  ? parseString(repo.description.slice(0, 120)) + "..."
                  : parseString(repo.description)
                : "No description provided";
              const languages = repo.languages;
              let commitCount: number | string = 0;
              let changeCount: number | string = 0;
              if (repo.defaultBranchRef) {
                commitCount = parseNumber(
                  repo.defaultBranchRef.target.history.totalCount
                );
                const edges = repo.defaultBranchRef.target.history.edges;
                for (let i = 0; i < edges.length; i++) {
                  changeCount =
                    changeCount +
                    edges[i].node.additions +
                    edges[i].node.deletions;
                }
              }
              changeCount = parseNumber(changeCount as number);
              for (let item of excluded_stats) {
                switch (item) {
                  case "stargazers":
                    starCount = "None";
                    break;
                  case "forks":
                    forkCount = "None";
                    break;
                  case "watchers":
                    watcherCount = "None";
                    break;
                  case "prs":
                    prCount = "None";
                    break;
                  case "issues":
                    issueCount = "None";
                    break;
                  case "commits":
                    commitCount = "None";
                    break;
                  case "changes":
                    changeCount = "None";
                    break;
                  default:
                    console.log("Out of switch");
                }
              }
              if (hide_zero === "true") {
                if (
                  !parseInt(starCount) &&
                  included_stats.indexOf("stargazers") === -1
                )
                  starCount = "None";
                if (
                  !parseInt(forkCount) &&
                  included_stats.indexOf("forks") === -1
                )
                  forkCount = "None";
                if (
                  !parseInt(watcherCount) &&
                  included_stats.indexOf("watchers") === -1
                )
                  watcherCount = "None";
                if (!parseInt(prCount) && included_stats.indexOf("prs") === -1)
                  prCount = "None";
                if (
                  !parseInt(issueCount) &&
                  included_stats.indexOf("issues") === -1
                )
                  issueCount = "None";
                if (
                  !parseInt(commitCount as string) &&
                  included_stats.indexOf("commits") === -1
                )
                  commitCount = "None";
                if (
                  !parseInt(changeCount) &&
                  included_stats.indexOf("changes") === -1
                )
                  changeCount = "None";
              }
              for (let item of excluded_langs) {
                for (let item2 of languages.nodes) {
                  if (item === item2.name) {
                    languages.nodes.splice(languages.nodes.indexOf(item2), 1);
                  }
                }
              }
              res.send(
                repoCard(
                  layout,
                  width,
                  height,
                  scale,
                  name,
                  description,
                  languages,
                  starCount,
                  forkCount,
                  issueCount,
                  prCount,
                  watcherCount,
                  commitCount,
                  changeCount,
                  hcolor,
                  color,
                  bgcolor,
                  bdcolor,
                  bdwidth,
                  bggrad
                )
              );
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
    } else if (!token) {
      res.send(errorCard("No Token!"));
    } else if (!username) {
      res.send(errorCard("No Username!"));
    } else if (!reponame) {
      res.send(errorCard("No Repository Name!"));
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

export default repoHandler;
