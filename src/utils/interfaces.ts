import { Document } from "mongoose";
import { JwtPayload } from "jsonwebtoken";

export interface UserPayload extends JwtPayload {
  name: string;
  permission: string[];
  userId: string;
  email: string;
}

export interface ITokenResponse {
  token: string;
  refreshToken: string;
}

export interface IUserSchema extends Document {
  name: string;
  role: Array<string>;
  password: string;
  email: string;
  _id: string;
  createdAt: Date;
  deletedAt?: Date;
  updatedAt?: Date;
  deleted: boolean;
}

export interface IUser {
  name?: string;
  password?: string;
  email?: string;
  id?: string;
  service?: string;
  permission?: Array<string>;
  userId?: string;
}

export interface UserDataService {
  name: string;
  role: string[];
  password: string;
  email: string;
  service: string;
}

export interface IRefreshToken extends Document {
  userId: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}
