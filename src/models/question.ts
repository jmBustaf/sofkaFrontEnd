export interface IQuestion {
    id?: string,
    level: number,
    category: string,
    statement: string,
    options: string,
    answer: string,
    created_at?: Date,
    update_at?: Date,
}