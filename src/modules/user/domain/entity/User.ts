export default class User {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    constructor({id, name, email, password, createdAt, updatedAt, deletedAt}: {
        id: number,
        name: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null
    }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}