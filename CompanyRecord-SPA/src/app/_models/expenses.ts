export interface Expenses {
    id: number;
    paidTo: string;
    description: string;
    amount: number;
    methodOfPayment: string;
    paidOn: Date;
}
