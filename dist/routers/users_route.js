"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enum_1 = require("../utils/enum");
const user_controllers_1 = __importDefault(require("../controllers/user_controllers"));
const middleware_1 = require("../middleware");
const userSchema_1 = require("../middleware/schemas/userSchema");
const user_route = express_1.default.Router();
const user_controller = new user_controllers_1.default();
const permissions = [enum_1.Permissions.SAVEMONEY_USER];
user_route
    .post(enum_1.Routes.SAVE_USER, userSchema_1.userCreateSchema, middleware_1.validRequest, user_controller.createUser)
    .put(enum_1.Routes.REDEFINE_PASSWORD, user_controller.redefinePassword)
    .put(enum_1.Routes.NEW_PASSWORD, middleware_1.verifyToken, (0, middleware_1.verifyPermission)(permissions), user_controller.redefinePassword)
    .delete(enum_1.Routes.DELETE_USER, middleware_1.verifyToken, (0, middleware_1.verifyPermission)(permissions), user_controller.deleteUsers);
exports.default = user_route;
function myValidationResult() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=users_route.js.map