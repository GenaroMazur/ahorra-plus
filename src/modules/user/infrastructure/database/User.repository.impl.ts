import User from "../../domain/entity/User";
import {UserRepository} from "../../domain/repository/User.repository";
import Application from "../../../../infrastructure/Application";
import SystemException from "../../../../share/exceptions/SystemException";

const database = Application.instance.database

if (!database) throw new SystemException("Database not found")

const userRepositoryDatasource = database.datasource.getRepository(User)

export class UserRepositoryImpl implements UserRepository {
    async delete(entity: User): Promise<void> {
        await userRepositoryDatasource.delete(entity.id);
    }

    findByEmail(email: string): Promise<User | null> {
        return userRepositoryDatasource.findOne({where: {email}});
    }

    findById(id: number): Promise<User | null> {
        return userRepositoryDatasource.findOne({where: {id}});
    }

    findByUsername(username: string): Promise<User | null> {
        return userRepositoryDatasource.findOne({where: {name: username}});
    }

    save(entity: User): Promise<User> {
        return userRepositoryDatasource.save(entity)
    }
}

