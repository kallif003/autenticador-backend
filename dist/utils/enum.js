"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.Permissions = exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["SAVE_USER"] = "/api/user/save";
    Routes["UPDATE_USER"] = "/user/update/:id";
    Routes["REDEFINE_PASSWORD"] = "/api/redefine_password/:id";
    Routes["NEW_PASSWORD"] = "/api/new_password/:id";
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
//# sourceMappingURL=enum.js.map