import { Expenses } from './expenses';

export interface Company {
    id: number;
    name: string;
    description: string;
    tags: string;
    expenses?: Expenses[];
}
