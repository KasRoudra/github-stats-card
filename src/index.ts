/*
 * Github-Stats-Card
 * Description : Get github statistics in svg which can be used shown in github readme
 * Author      : KasRoudra(https://github.com/KasRoudra, https://github.com/KasRoudra2)
 * Email       : kasroudrakrd@gmail.com
 * Language    : TypeScript
 * Date        : 27-03-2022
 */

import express from "express";
import cors from "cors";
import {
  apiHandler,
  apiUserHandler,
  apiUserDeepHandler,
  apiRepoHandler,
  apiOrgHandler,
  apiPinnedHandler,
  apiPRHandler,
  apiIssueHandler,
  svgHandler,
  userHandler,
  userDeepHandler,
  langHandler,
  repoHandler,
  themeHandler,
  limitHandler,
} from "./routeHandlers";
import { parsePath } from "./utils";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors()); // enable cross origin resource sharing for all routes, enable all domains to access the api

//app.set('etag', false); // Disabling etag forces the browser to always fetch the latest data

app.use((_, res, next) => {
  res.set("Cache-Control", "public, max-age=14400, s-maxage=14400"); // 4 hours cache
  next();
});
// Root route serving static files

app.use("/", express.static(parsePath("public")));

// API Routes

app.get("/api", apiHandler);

app.get("/api/user/:user", apiUserHandler);

app.get("/api/repo/:user/:repo", apiRepoHandler);

app.get("/api/userdeep/:user", apiUserDeepHandler);

app.get("/api/org/:user", apiOrgHandler);

app.get("/api/pinned/:user", apiPinnedHandler);

app.get("/api/pr/:user", apiPRHandler);

app.get("/api/issue/:user", apiIssueHandler);

// Card Routes

app.get("/user", userHandler);

app.get("/userdeep", userDeepHandler);

app.get("/lang", langHandler);

app.get("/repo", repoHandler);

app.get("/svg", svgHandler);

// Theme Route

app.get("/themes", themeHandler);

// Limit Route

app.get("/limit", limitHandler);

// If nothing mathes, last route of * wildcard will be called

app.get("/*", (_, res) => {
  res.send("Nothing to see here");
});

// Start Server

app.listen(port, () => {
  console.log(`Github-Stats-Card is listening on port ${port}`);
});
