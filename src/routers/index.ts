import express, { Request, Response, Express } from "express";
import cors from "cors";
import user_route from "./users_route";
import { cacheControlMiddleware } from "../middleware";

const router = (app: Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send("Autenticador ");
  });
  app.use(express.json(), cors(), cacheControlMiddleware, user_route);
};

export default router;
