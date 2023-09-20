import express from "express";
import { Permissions, Routes } from "../utils/enum";
import UserController from "../controllers/user_controllers";
import { validRequest, verifyPermission, verifyToken } from "../middleware";
import { userCreateSchema } from "../middleware/schemas/userSchema";
import { typePermissions } from "../utils/permissions";

const user_route = express.Router();
const user_controller = new UserController();

user_route
  .post(
    Routes.SAVE_USER,
    userCreateSchema,
    validRequest,
    user_controller.createUser
  )
  .put(Routes.CREATE_PASSWORD, user_controller.redefinePassword)
  .put(
    Routes.CHANGE_PASSWORD,
    verifyToken,
    verifyPermission(typePermissions),
    user_controller.changePassword
  )
  .delete(
    Routes.DELETE_USER,
    verifyToken,
    verifyPermission(typePermissions),
    user_controller.deleteUsers
  );

export default user_route;
