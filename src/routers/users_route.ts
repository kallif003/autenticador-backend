import express from "express";
import { Permissions, Routes } from "../utils/enum";
import UserController from "../controllers/user_controllers";
import { validRequest, verifyPermission, verifyToken } from "../middleware";
import { userCreateSchema } from "../middleware/schemas/userSchema";

const user_route = express.Router();
const user_controller = new UserController();

const permissions = [Permissions.SAVEMONEY_USER];

user_route
  .post(
    Routes.SAVE_USER,
    userCreateSchema,
    validRequest,
    user_controller.createUser
  )
  .put(Routes.REDEFINE_PASSWORD, user_controller.redefinePassword)
  .put(
    Routes.NEW_PASSWORD,
    verifyToken,
    verifyPermission(permissions),
    user_controller.redefinePassword
  )
  .delete(
    Routes.DELETE_USER,
    verifyToken,
    verifyPermission(permissions),
    user_controller.deleteUsers
  );

export default user_route;
function myValidationResult(): import("express-serve-static-core").RequestHandlerParams<Record<string, any>, any, any, import("qs").ParsedQs, Record<string, any>> {
  throw new Error("Function not implemented.");
}

