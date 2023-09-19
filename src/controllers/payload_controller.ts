import { Request, Response } from "express";
import TokenService from "../services/token_service";
import { IUser } from "../utils/interfaces";

class PayloadController {
  async payload(req: Request, res: Response) {
    const token = req.token as string;

    const user = await TokenService.decodedTokenService(token);

    let data: IUser = {
      name: user?.name,
      permission: user?.permission,
      userId: user?.userId,
    };

    if (!user) {
      res.status(401).send({ message: "Token inválido" });
    }

    return res.status(200).json(data);
  }
}

export default PayloadController;
