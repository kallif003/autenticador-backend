export enum Routes {
  SAVE_USER = "/api/user/save",
  UPDATE_USER = "/user/update/:id",
  REDEFINE_PASSWORD = "/api/redefine_password/:id",
  NEW_PASSWORD = "/api/new_password/:id",
  DELETE_USER = "/user/:id",

  LOGIN = "/api/login",
  PAYLOAD = "/api/payload",
  REFRESH_TOKEN = "/api/refresh_token",
  VERIFYTOKEN = "/api/verifyToken",
}

export enum Permissions {
  SAVEMONEY_USER = "SAVEMONEY_USER",
}

export enum Service {
  SAVEMONEY = "SaveMoney",
}
