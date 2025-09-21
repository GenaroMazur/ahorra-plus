import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("category")
export default class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 100})
    name: string

    @Column({type: "text"})
    description: string

    @Column({type: "boolean", default: true})
    modificable: boolean

    @Column({type: "int", nullable: true})
    userId: number | null
}