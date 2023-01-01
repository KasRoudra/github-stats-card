import { Request, Response } from "express";

const svgHandler = async (req: Request, res: Response) => {
  try {
    const username = req.query.user;
    const reponame = req.query.repo;
    username
      ? reponame
        ? res.redirect(`/user?user=${username}&repo=${reponame}`)
        : res.redirect(`/user?user=${username}`)
      : res.redirect("/");
  } catch (err) {
    console.log(err);
    if (err.message) {
      res.send({ message: err.message });
    } else {
      res.send({ message: JSON.stringify(err) });
    }
  }
};

export default svgHandler;
