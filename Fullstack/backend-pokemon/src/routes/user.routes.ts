import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";

import { verifyEmailExist } from "../middlewares/verifyEmail.middleware";

import { Router } from "express";

const routesUsers = Router();

routesUsers.post("", verifyEmailExist, userCreateController);
routesUsers.post("/login", userLoginController);
routesUsers.get("", userListController);

export default routesUsers;
