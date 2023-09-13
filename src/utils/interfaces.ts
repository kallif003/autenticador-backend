import { Document } from "mongoose";

export interface IUserSchema extends Document {
  name: string;
  role: string[];
  password: string;
  email: string;
  createdAt: Date;
  deletedAt?: Date;
  updatedAt?: Date;
  deleted: boolean;
}

export interface IUser {
  name?: string;
  password: string;
  email: string;
  id?: string;
}

export interface UserDataService {
  name: string;
  role: string[];
  password: string;
  email: string;
}

export interface IRefreshToken extends Document {
    userId: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
  }