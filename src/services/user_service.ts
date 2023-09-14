import bcrypt from "bcrypt";
import User from "../models/users";
import { IUser, UserDataService } from "../utils/interfaces";
import HandleError from "../utils/errors/handleError";
import EmailService from "./email_service";

class UserService {
  static async createUser(userData: UserDataService) {
    try {
      const { email, service } = userData;

      const existingUser = await User.findOne({
        email,
        deleted: false,
      });

      if (existingUser != null) {
        throw new HandleError("Email já existente", 409);
      }

      const saltRounds = 8;
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      userData.password = hashedPassword;

      const newUser = new User({
        ...userData,
      });

      const savedUser = await newUser.save();

      if (savedUser) {
        await EmailService.sendEmail(email, service, savedUser.id);
      }

      return savedUser;
    } catch (error: any) {
      if (error instanceof HandleError) {
        throw error;
      }

      throw new Error(error.message);
    }
  }

  static async passwordResetService(updatedData: IUser[], id: string) {
    try {
      let user: any;

      if (id) {
        user = await User.findById(id, { deleted: false });
      } else {
        user = await User.findOne({
          email: updatedData[0].email,
          deleted: false,
        });
      }

      if (user == null) {
        throw new HandleError("Email não encontrado", 404);
      }

      const saltRounds = 8;

      const hashedPassword = await bcrypt.hash(
        updatedData[0].password,
        saltRounds
      );

      user.password = hashedPassword;

      await user!.save();

      return true;
    } catch (error: any) {
      if (error instanceof HandleError) {
        throw error;
      }

      throw new Error("Usuário não encontrado");
    }
  }

  static async deleteUser(userId: string) {
    try {
      const currentDate = new Date();

      const user = await User.findByIdAndUpdate(
        userId,
        {
          deleted: true,
          deletedAt: currentDate,
        },
        { new: true }
      );

      return user;
    } catch (error: any) {
      throw new Error("Usuário não encontrado");
    }
  }
}

export default UserService;
