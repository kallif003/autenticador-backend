import { Request, Response } from "express";
import UserService from "../services/user_service";
import { IUser } from "../utils/interfaces";
import HandleError from "../utils/errors/handleError";
import PasswordGenerator from "../utils/passwordGenerator";
import { Service } from "../utils/enum";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, role, service } = req.body;

      const generator = new PasswordGenerator();
      const password = generator.generateRandomPassword();

      const createUser = await UserService.createUser({
        name,
        role,
        password,
        email,
        service,
      });

      return res.status(201).json(createUser);
    } catch (error: any) {
      if (error instanceof HandleError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }

  async redefinePassword(req: Request, res: Response) {
    try {
      const { email, password, service }: IUser = req.body;

      const { id } = req.params;

      await UserService.passwordResetService([{ email, password }], id);

      let url = "";

      if (service == Service.SAVEMONEY) {
        url = process.env.SAVEMONY_SERVICE;
      }

      return res.status(200).send(url);
    } catch (error: any) {
      if (error instanceof HandleError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }

  async deleteUsers(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await UserService.deleteUser(id);

      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(404).send({ message: error.message });
    }
  }
}

export default UserController;
