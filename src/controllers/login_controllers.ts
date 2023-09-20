import bcrypt from "bcrypt";
import User from "../models/users";
import { Request, Response } from "express";
import TokenService from "../services/token_service";
import HandleError from "../utils/errors/handleError";
import AuthService from "../services/auth_service";

class LoginController {
  async login(req: Request, res: Response) {
    const authService = new AuthService();

    const authHeader = req.headers.authorization;

    const credentials = authService.parseCredentials(authHeader);

    if (!credentials) {
      return res.status(401).send({ message: "Credenciais inválidas" });
    }

    const { email, password } = credentials;

    const user = await authService.findUserByEmail(email);

    if (!user) {
      return res.status(403).json({ error: "Usuário não encontrado" });
    }

    const passwordMatch = await authService.comparePasswords(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(403).json({ error: "Senha incorreta" });
    }

    const { token, refreshToken } = await authService.generateTokens(user);

    res.status(200).json({ token, refreshToken, permission: user.role });
  }
}

export default LoginController;
