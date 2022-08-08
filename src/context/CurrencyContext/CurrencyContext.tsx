import { createContext, FC, ReactNode, useContext, useState } from "react";
import { SingleValue } from "react-select";
import { Currency } from "../../config/currency";
import { ICurrencyOption } from "../../types";

interface ICurrencyContext {
    currencyOption: ICurrencyOption | null,
    setCurrencyOption: (value: ICurrencyOption | null) => void
}

const CurrencyContext = createContext<ICurrencyContext>({
    currencyOption: {
        value: Currency.USD,
        label: 'USD'
    },
    setCurrencyOption: (value: ICurrencyOption | null) => { }
});

const useCurrencyValue = () => {
    const [currencyValue, setCurrencyValue] = useState<ICurrencyContext>(() => {
        return {
            currencyOption: {
                value: Currency.USD,
                label: 'USD'
            },
            setCurrencyOption: (value: ICurrencyOption | null) => {
                setCurrencyValue((actual) => {
                    return {
                        ...actual,
                        currencyOption: value
                    }
                })
            },
        }
    })

    return currencyValue;
}

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext)

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CurrencyContext.Provider value={useCurrencyValue()}>{children}</CurrencyContext.Provider>
    )
}