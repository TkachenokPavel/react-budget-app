import { Currency } from "../config/currency";

export interface ICurrencyOption {
    value: Currency,
    label: keyof typeof Currency
}

export type FormValues = {
    name: string,
    cost: number
}