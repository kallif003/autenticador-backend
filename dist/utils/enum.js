"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["SAVE_USER"] = "/api/user/save";
    Routes["UPDATE_USER"] = "/user/update/:id";
    Routes["REDEFINE_PASSWORD"] = "/api/redefine_password";
    Routes["NEW_PASSWORD"] = "/api/new_password/:id";
    Routes["DELETE_USER"] = "/user/:id";
    Routes["SAVE_CATEGORY"] = "/api/category/save/:id";
    Routes["GET_CATEGORIES"] = "/api/categories/:id";
    Routes["GET_CATEGORY_NAME"] = "/api/categories_names/:id";
    Routes["GET_CATEGORY_BY_ID"] = "/api/categorY_by_id/:id";
    Routes["UPDATE_CATEGORY"] = "/api/update_category/:id";
    Routes["DELETE_CATEGORY"] = "/api/delete_category/:id";
    Routes["SAVE_RELEASE"] = "/api/release/save/:id";
    Routes["GET_RELEASES"] = "/api/release/:id";
    Routes["DELETE_RELEASE"] = "/api/delete_release/:id";
    Routes["UPDATE_RELEASE"] = "/api/update_release/:id";
    Routes["LOGIN"] = "/api/login";
    Routes["PAYLOAD"] = "/api/payload";
    Routes["REFRESH_TOKEN"] = "/api/refresh_token";
    Routes["SAVE_SALARY"] = "/api/salary/save/:id";
    Routes["GET_SALARY"] = "/api/salary/:id";
})(Routes = exports.Routes || (exports.Routes = {}));
var Permissions;
(function (Permissions) {
    Permissions["SAVEMONEY_USER"] = "SAVEMONEY_USER";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
//# sourceMappingURL=enum.js.map