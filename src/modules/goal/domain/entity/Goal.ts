import {GoalStateEnum} from "../enums/GoalState.enum";

export default class Goal {
    id: number
    userId: number
    title: string
    description: string
    targetAmount: number
    currentAmount: number
    deadline: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    state: GoalStateEnum

    constructor({
                    id,
                    userId,
                    title,
                    description,
                    targetAmount,
                    currentAmount,
                    deadline,
                    createdAt,
                    updatedAt,
                    deletedAt,
                    state
                }: {
        id: number,
        userId: number,
        title: string,
        description: string,
        targetAmount: number,
        currentAmount: number,
        deadline: Date,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
        state: GoalStateEnum
    }) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.targetAmount = targetAmount;
        this.currentAmount = currentAmount;
        this.deadline = deadline;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.state = state;
    }
}