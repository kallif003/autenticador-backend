import express, { Request, Response, Express } from "express";
import cors from "cors";
import user_route from "./users_route";
import {
  verifyToken,
  cacheControlMiddleware,
  errorHandler,
} from "../middleware";
import login_route from "./login_route";
import payload_route from "./payload_route";
import refresh_token_route from "./refreshToken_route";
import verifyToen_route from "./verifytoken_route";

const router = (app: Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send("Autenticador ");
  });
  app.use(
    express.json(),
    cors(),
    cacheControlMiddleware,
    login_route,
    user_route,
    verifyToen_route,
    verifyToken,
    refresh_token_route,
    payload_route,
    errorHandler
  );
};

export default router;
