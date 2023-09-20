"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = exports.Service = exports.Permissions = exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["SAVE_USER"] = "/api/user/save";
    Routes["UPDATE_USER"] = "/user/update/:id";
    Routes["REDEFINE_PASSWORD"] = "/api/redefine_password";
    Routes["CHANGE_PASSWORD"] = "/api/change_password/:id";
    Routes["CREATE_PASSWORD"] = "/api/create_password/:id";
    Routes["DELETE_USER"] = "/user/:id";
    Routes["LOGIN"] = "/api/login";
    Routes["PAYLOAD"] = "/api/payload";
    Routes["REFRESH_TOKEN"] = "/api/refresh_token";
    Routes["VERIFYTOKEN"] = "/api/verifyToken";
})(Routes = exports.Routes || (exports.Routes = {}));
var Permissions;
(function (Permissions) {
    Permissions["SAVEMONEY_USER"] = "SAVEMONEY_USER";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var Service;
(function (Service) {
    Service["SAVEMONEY"] = "SaveMoney";
})(Service = exports.Service || (exports.Service = {}));
var Actions;
(function (Actions) {
    Actions["CREATE"] = "create";
    Actions["UPDATE"] = "update";
})(Actions = exports.Actions || (exports.Actions = {}));
//# sourceMappingURL=enum.js.map