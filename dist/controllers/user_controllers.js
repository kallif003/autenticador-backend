"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user_service"));
const handleError_1 = __importDefault(require("../utils/errors/handleError"));
const passwordGenerator_1 = __importDefault(require("../utils/passwordGenerator"));
const enum_1 = require("../utils/enum");
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, role, service } = req.body;
                const generator = new passwordGenerator_1.default();
                const password = generator.generateRandomPassword();
                const createUser = yield user_service_1.default.createUser({
                    name,
                    role,
                    password,
                    email,
                    service,
                });
                return res.status(201).json(createUser);
            }
            catch (error) {
                if (error instanceof handleError_1.default) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                return res.status(500).send({ message: error.message });
            }
        });
    }
    redefinePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, service } = req.body;
                const { id } = req.params;
                yield user_service_1.default.passwordResetService([{ email, password }], id);
                let url = "";
                if (service == enum_1.Service.SAVEMONEY) {
                    url = process.env.SAVEMONY_SERVICE;
                }
                return res.status(200).send(url);
            }
            catch (error) {
                if (error instanceof handleError_1.default) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                return res.status(500).send({ message: error.message });
            }
        });
    }
    deleteUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield user_service_1.default.deleteUser(id);
                return res.status(200).json(user);
            }
            catch (error) {
                return res.status(404).send({ message: error.message });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user_controllers.js.map