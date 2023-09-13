"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_route_1 = __importDefault(require("./users_route"));
const middleware_1 = require("../middleware");
const router = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Autenticador ");
    });
    app.use(express_1.default.json(), (0, cors_1.default)(), middleware_1.cacheControlMiddleware, users_route_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map