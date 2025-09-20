export default class Category {
    id: number
    name: string
    description: string
    modificable: boolean
    userId: number | null

    constructor(
        {
            id,
            name,
            description,
            modificable,
            userId
        }: {
            id: number
            name: string
            description: string
            modificable: boolean
            userId: number | null
        }
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.modificable = modificable
        this.userId = userId
    }
}