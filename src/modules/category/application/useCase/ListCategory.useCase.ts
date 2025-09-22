import CategoryUseCase from "./Category.useCase";
import {UseCaseInterface} from "../../../../share/interfaces/UseCase.interface";

export default class CreateCategoryUseCase extends CategoryUseCase implements UseCaseInterface {
    execute(userId: number) {
        return this.categoryRepository.findByUserId(userId)
    }
}