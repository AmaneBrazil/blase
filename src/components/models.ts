export interface Todo {
    id: number;
    content: string;
}

export interface Meta {
    totalCount: number;
}

export type RollOption = {
    value: number;
    color: 'red' | 'white' | 'grey';
    icon?: string;
};
