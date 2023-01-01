import { Request, Response } from "express";
import fetch from "cross-fetch";
const token = process.env.TOKEN;

const limitHandler = async (req: Request, res: Response) => {
  try {
    const query = {
      query: `
            query {
              rateLimit {
                limit
                cost
                remaining
                resetAt
              }
           }
           `,
    };
    if (token) {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(query),
      })
        .then((resp) => resp.json())
        .then((response: any) => {
          res.json(response.data.rateLimit);
        })
        .catch((err) => {
          console.log(err);
          if (err.message) {
            res.send(err.message);
          } else {
            res.send(JSON.stringify(err));
          }
        });
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

export default limitHandler;
