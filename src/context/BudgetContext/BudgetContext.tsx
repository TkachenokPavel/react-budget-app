import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
    budget: number,
    setBudget: (value: number) => void
}

const BudgetContext = createContext<IBudgetContext>({
    budget: 0,
    setBudget: (value: number) => { }
});

const useBudgetValue = () => {
    const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => {
        return {
            budget: 0,
            setBudget: (value: number) => {
                setBudgetContext((actual) => {
                    return {
                        ...actual,
                        budget: value
                    }
                })
            }
        }
    });

    return budgetContext;
}

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <BudgetContext.Provider value={useBudgetValue()}>
            {children}
        </BudgetContext.Provider>
    )
}