import {TransactionTypeEnum} from "../enums/TransactionType.enum";
import {TransactionRegularityEnum} from "../enums/TransactionRegularity.enum";

export default class Transaction {
    id: number
    userId: number
    categoryId: number

    type: TransactionTypeEnum
    regularity: TransactionRegularityEnum
    status: boolean

    description: string
    amount: number

    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    constructor(
        {id, userId, categoryId, type, regularity, status, description, amount, createdAt, updatedAt, deletedAt}: {
            id: number,
            userId: number,
            categoryId: number,
            type: TransactionTypeEnum,
            regularity: TransactionRegularityEnum,
            status: boolean,
            description: string,
            amount: number,
            createdAt: Date,
            updatedAt: Date,
            deletedAt: Date | null
        }
    ) {
        this.id = id
        this.userId = userId
        this.categoryId = categoryId
        this.type = type
        this.regularity = regularity
        this.status = status
        this.description = description
        this.amount = amount
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.deletedAt = deletedAt
    }

}