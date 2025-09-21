import {Router} from "express";
import {loginController, registerController} from "./user.controller";
import {loginMiddleware, registerMiddleware} from "./userMiddleware";

const userRoutes = Router({mergeParams: true});

userRoutes.post("/register", registerMiddleware, registerController);
userRoutes.post("/login", loginMiddleware, loginController);

export default userRoutes