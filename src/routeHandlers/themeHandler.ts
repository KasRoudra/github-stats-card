import { Request, Response } from "express";
import themes from "../themes";
import { capitalize } from "../utils";

const themeHandler = async (req: Request, res: Response) => {
  try {
    const themesArray = [];
    for (const theme in themes) {
      if (theme === "default") continue;
      themesArray.push({
        name: capitalize(theme.replace(/-/g, " ").replace(/_/g, " ")),
        value: theme,
      });
    }
    res.json(themesArray);
  } catch (err) {
    console.log(err);
    if (err.message) {
      res.send({ message: err.message });
    } else {
      res.send({ message: JSON.stringify(err) });
    }
  }
};

export default themeHandler;
