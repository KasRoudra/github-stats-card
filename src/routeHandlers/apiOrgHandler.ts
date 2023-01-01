import { Request, Response } from "express";
import fetch from "cross-fetch";

const token = process.env.TOKEN;

const apiOrgHandler = async (req: Request, res: Response) => {
  try {
    const username = req.params.user;
    const query = {
      query: `query{
        user(login: "${username}") {
            repositoriesContributedTo(last: 100){
              totalCount
              nodes{
                owner{
                  login
                  avatarUrl
                  __typename
                }
              }
            }
          }
        }`,
    };
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

export default apiOrgHandler;
