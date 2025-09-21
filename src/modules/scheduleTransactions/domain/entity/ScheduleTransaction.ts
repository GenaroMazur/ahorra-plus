import {TransactionRegularityEnum} from "../../../../share/enums/TransactionRegularity.enum";
import {TransactionTypeEnum} from "../../../../share/enums/TransactionType.enum";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("schedule_transaction")
export default class ScheduleTransaction {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: "int", nullable: false})
    userId: number
    @Column({type: "int", nullable: false})
    categoryId: number

    @Column({type: "enum", enum: TransactionTypeEnum, nullable: false})
    type: TransactionTypeEnum

    @Column({type: "enum", enum: TransactionRegularityEnum, nullable: false})
    regularity: TransactionRegularityEnum

    @Column({type: "boolean", default: true, nullable: false})
    status: boolean

    @Column({type: "varchar", length: 255, nullable: false})
    description: string

    @Column({type: "decimal", precision: 10, scale: 2, nullable: false})
    amount: number

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date
    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    updatedAt: Date
    @Column({type: "timestamp", nullable: true})
    deletedAt: Date | null

    @Column({type: "varchar", length: 50, nullable: false})
    periodicity: `${number} ${'day' | 'week' | 'month' | 'year'}`
    @Column({type: "timestamp", nullable: false})
    nextOccurrence: Date
    @Column({type: "timestamp", nullable: true})
    endDate: Date | null

}