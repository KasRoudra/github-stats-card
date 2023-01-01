import { Request, Response } from "express";
import fetch from "cross-fetch";

const token = process.env.TOKEN;

const apiRepoHandler = async (req: Request, res: Response) => {
  try {
    const username = req.params.user;
    const reponame = req.params.repo;
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
                  isEmpty
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
    if (username && reponame && token) {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(query),
      })
        .then((resp) => resp.json())
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          console.log(err);
          if (err.message) {
            res.send(err.message);
          } else {
            res.send(JSON.stringify(err));
          }
        });
    } else if (!username) {
      res.json({ message: "No username!" });
    } else if (!reponame) {
      res.json({ message: "No repository name!" });
    } else if (!token) {
      res.json({ message: "No token!" });
    } else {
      res.json({ message: "Unknown error occured!" });
    }
  } catch (err) {
    console.log(err);
    if (err.message) {
      res.send({ message: err.message });
    } else {
      res.send({ message: JSON.stringify(err) });
    }
  }
};

export default apiRepoHandler;
