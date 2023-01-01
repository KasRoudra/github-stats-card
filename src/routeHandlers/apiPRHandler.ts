import { Request, Response } from "express";
import fetch from "cross-fetch";

const token = process.env.TOKEN;

const apiPRHandler = async (req: Request, res: Response) => {
  try {
    const username = req.params.user;
    const query = {
      query: `
          query {
            user(login: "${username}"){
              pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
              totalCount
              nodes{
                id
                title
                url
                state
                mergedBy {
                  avatarUrl
                  url
                  login
                }
                createdAt
                number
                changedFiles
                additions
                deletions
                baseRepository {
                  name
                  url
                  owner {
                    avatarUrl
                    login
                    url
                  }
                }
              }
            }
          }
       }
      `,
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

export default apiPRHandler;
