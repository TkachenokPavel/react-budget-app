import { FC, ReactNode } from "react";
import { BudgetProvider } from "../BudgetContext/BudgetContext";
import { CurrencyProvider } from "../CurrencyContext/CurrencyContext";
import { ExpensesProvider } from "../ExpensesContext";

const providers = [CurrencyProvider, ExpensesProvider, BudgetProvider];

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            {providers.reduce((acc, Component) => {
                return <Component>{acc}</Component>
            }, children)}
        </>
    )
}