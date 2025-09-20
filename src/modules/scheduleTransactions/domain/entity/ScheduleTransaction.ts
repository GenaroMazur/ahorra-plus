import {TransactionRegularityEnum} from "../../../../share/enums/TransactionRegularity.enum";
import {TransactionTypeEnum} from "../../../../share/enums/TransactionType.enum";

export default class ScheduleTransaction {
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

    periodicity: `${number} ${'day' | 'week' | 'month' | 'year'}`
    nextOccurrence: Date
    endDate: Date | null


    constructor({
                    id,
                    userId,
                    categoryId,
                    type,
                    regularity,
                    status,
                    description,
                    amount,
                    createdAt,
                    updatedAt,
                    deletedAt,
                    periodicity,
                    nextOccurrence,
                    endDate
                }: {
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
        deletedAt: Date | null,
        periodicity: `${number} ${"day" | "week" | "month" | "year"}`,
        nextOccurrence: Date,
        endDate: Date | null
    }) {
        this.id = id;
        this.userId = userId;
        this.categoryId = categoryId;
        this.type = type;
        this.regularity = regularity;
        this.status = status;
        this.description = description;
        this.amount = amount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.periodicity = periodicity;
        this.nextOccurrence = nextOccurrence;
        this.endDate = endDate;
    }
}