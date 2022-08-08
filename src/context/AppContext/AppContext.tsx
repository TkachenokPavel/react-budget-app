import { FC, ReactNode } from "react";
import { CurrencyProvider } from "../CurrencyContext/CurrencyContext";
import { ExpensesProvider } from "../ExpensesContext";

const providers = [CurrencyProvider, ExpensesProvider];

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            {providers.reduce((acc, Component) => {
                return <Component>{acc}</Component>
            }, children)}
        </>
    )
}