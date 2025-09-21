import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("user")
export default class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 255, nullable: false})
    name: string

    @Column({type: "varchar", length: 255, unique: true, nullable: false})
    email: string

    @Column({type: "varchar", length: 255, nullable: false})
    password: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    updatedAt: Date

    @Column({type: "timestamp", nullable: true})
    deletedAt: Date | null

}