import {UseCaseInterface} from "../../../../share/interfaces/UseCase.interface";
import UserUseCase from "./User.useCase";

export default class LoginUseCase extends UserUseCase implements UseCaseInterface {

    execute(...params: any[]): Promise<any> {
        throw new Error("Method not implemented.");
    }

}