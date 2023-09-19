import nodemailer from "nodemailer";
import { message } from "../utils/emailMsg";

class EmailService {
  static async sendEmail(recipient: string, service: string, userId: string) {
    try {
      const transportConfig = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER_EMAIL,
          pass: `${process.env.USER_PASS}#`,
        },
      });

      await transportConfig
        .sendMail({
          from: `Aunteticador ${service} <${process.env.USER_EMAIL}>`,
          to: recipient,
          subject: "Cadastro de senha",
          html: message(userId, service),
        })
        .then((res) => console.log("deu certo ", res));
    } catch (error) {
      console.log("error", error);
    }
  }
}

export default EmailService;
