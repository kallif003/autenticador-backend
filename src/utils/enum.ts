export enum Routes {
  SAVE_USER = "/api/user/save",
  UPDATE_USER = "/user/update/:id",
  REDEFINE_PASSWORD = "/api/redefine_password/:id",
  NEW_PASSWORD = "/api/new_password/:id",
  DELETE_USER = "/user/:id",

  SAVE_CATEGORY = "/api/category/save/:id",
  GET_CATEGORIES = "/api/categories/:id",
  GET_CATEGORY_NAME = "/api/categories_names/:id",
  GET_CATEGORY_BY_ID = "/api/categorY_by_id/:id",
  UPDATE_CATEGORY = "/api/update_category/:id",
  DELETE_CATEGORY = "/api/delete_category/:id",

  SAVE_RELEASE = "/api/release/save/:id",
  GET_RELEASES = "/api/release/:id",
  DELETE_RELEASE = "/api/delete_release/:id",
  UPDATE_RELEASE = "/api/update_release/:id",

  LOGIN = "/api/login",
  PAYLOAD = "/api/payload",
  REFRESH_TOKEN = "/api/refresh_token",
  SAVE_SALARY = "/api/salary/save/:id",
  GET_SALARY = "/api/salary/:id",
}

export enum Permissions {
  SAVEMONEY_USER = "SAVEMONEY_USER",
}

export enum Service {
  SAVEMONEY = "SaveMoney",
}
