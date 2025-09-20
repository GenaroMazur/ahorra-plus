import {UserRepository} from "../../domain/repository/User.repository";

export default abstract class UserUseCase {
    constructor(protected readonly userRepository: UserRepository) {
    }

}