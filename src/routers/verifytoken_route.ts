import express from "express";
import { Routes } from "../utils/enum";
import TokenController from "../controllers/token_controller";
import { verifyPermission } from "../middleware";
import { typePermissions } from "../utils/permissions";

const verifyToen_route = express.Router();
const token_controller = new TokenController();

verifyToen_route.post(
  Routes.VERIFYTOKEN,
  token_controller.validatedToken,
);

export default verifyToen_route;
