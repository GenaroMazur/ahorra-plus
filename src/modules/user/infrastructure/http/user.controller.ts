import controllerBuilder from "../../../../share/utils/controllerBuilder";
import {loginUseCase, registerUseCase} from "../../config/di.container";

export const loginController = controllerBuilder(async (req) => {
    const name = req.body.name;
    const password = req.body.password;

    return loginUseCase.execute(name, password);
})

export const registerController = controllerBuilder(async (req) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    registerUseCase.execute(name, email, password);
})