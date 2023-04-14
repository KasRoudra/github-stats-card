import { Request, Response } from "express";
import fetch from "cross-fetch";
import userCard from "../cards/userCard";
import errorCard from "../cards/errorCard";
import themes from "../themes";
import { userResponse } from "../interfaces";
import {
  parseString,
  parseNumber,
  parseColor,
  parseImage,
  layouts,
} from "../utils";

const token = process.env.TOKEN;

const userHandler = async (req: Request, res: Response) => {
  try {
    const username = req.query.user;
    const theme = themes[req.query.theme as string] || themes["default"];
    const layout = layouts[req.query.layout as string] || layouts["default"];
    const img = req.query.img || "default";
    const width =
      (req.query.width as string) || (layout === "compact" ? "410" : "360");
    const height =
      (req.query.height as string) || (layout === "compact" ? "280" : "300");
    const scale = (req.query.scale as string) || "1";
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
    const bggrad = finalGrad ? "linear-gradient(" + finalGrad + ")" : "none";
    const resize = Boolean(req.query.resize as string);
    const query = {
      query: `
            query {
              user(login: "${username}") {
                name
                login
                bio
                avatarUrl
                contributionsCollection {
                    restrictedContributionsCount
                    totalCommitContributions
                }
                repositories(
                  first: 100
                  ownerAffiliations: OWNER
                  orderBy: { direction: DESC, field: STARGAZERS }
                  isFork: false
                ) {
                  totalCount
                  nodes {
                    stargazers {
                        totalCount
                    }
                    forks {
                        totalCount
                    }
                    watchers {
                        totalCount
                    }
                  }
                }
                repositoriesContributedTo(
                  first: 100
                  includeUserRepositories: false
                  orderBy: { direction: DESC, field: STARGAZERS }
                ) {
                  totalCount
                }
                followers {
                    totalCount
                }
                pullRequests {
                  totalCount
                }
                issues {
                  totalCount
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
        .then(async (response: userResponse) => {
          if (response.data) {
            const user = response.data.user;
            if (user) {
              const name = user.name || user.login;
              const bio = parseString(user.bio);
              const imageUrl =
                img === "default"
                  ? user.avatarUrl.replace(/&/g, "")
                  : img === "github"
                  ? "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  : "";
              const image = imageUrl ? await parseImage(imageUrl) : "";
              const repos = user.repositories.nodes;
              const repoLength = repos.length;
              const followerCount = parseNumber(user.followers.totalCount);
              const pullCount = parseNumber(user.pullRequests.totalCount);
              const issueCount = parseNumber(user.issues.totalCount);
              const commitCount = parseNumber(
                user.contributionsCollection.totalCommitContributions +
                  user.contributionsCollection.restrictedContributionsCount
              );
              const contRepoCount = parseNumber(
                user.repositories.totalCount +
                  user.repositoriesContributedTo.totalCount
              );
              let starCount: number | string = 0,
                forkCount: number | string = 0,
                watcherCount: number | string = 0;
              for (let i = 0; i < repoLength; i++) {
                starCount += repos[i].stargazers.totalCount;
                forkCount += repos[i].forks.totalCount;
                watcherCount += repos[i].watchers.totalCount;
              }
              starCount = parseNumber(starCount);
              forkCount = parseNumber(forkCount);
              watcherCount = parseNumber(watcherCount);
              res.send(
                userCard(
                  name,
                  bio,
                  image,
                  layout,
                  width,
                  height,
                  scale,
                  starCount,
                  forkCount,
                  commitCount,
                  watcherCount,
                  contRepoCount,
                  followerCount,
                  pullCount,
                  issueCount,
                  hcolor,
                  color,
                  bgcolor,
                  bdcolor,
                  bdwidth,
                  bggrad,
                  resize
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

export default userHandler;
