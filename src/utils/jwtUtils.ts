import jwt, { JwtPayload } from "jsonwebtoken";

export interface UserPayload extends JwtPayload {
  name: string;
  permission: string[];
  userId: string;
}

export const userInfo = (jwtToken: string): UserPayload | null => {
  const decodedToken = jwt.decode(jwtToken) as UserPayload;

  if (decodedToken && decodedToken.exp) {
    const { name, permission, userId } = decodedToken;

    return {
      name,
      permission,
      userId,
    };
  }
  return null;
};
