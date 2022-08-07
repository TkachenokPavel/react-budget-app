import { Currency } from "../config/currency";

export interface ICurrencyOption {
    value: Currency,
    label: keyof typeof Currency
}