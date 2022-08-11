import { createContext, FC, ReactNode, useContext, useState } from "react"
import { IExpense } from "../../types";

export interface IExpensesContext {
    expenses: IExpense[],
    setExpense: (value: IExpense) => void,
    deleteExpense: (id: string) => void
}

const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    setExpense: (value: IExpense) => { },
    deleteExpense: (id: string) => { }
});

export const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => {
        return {
            expenses: [],
            setExpense: (value: IExpense) => {
                setExpensesContext((actual) => ({
                    ...actual,
                    expenses: [...actual.expenses, value]
                }))
            },
            deleteExpense: (id: string) => {
                setExpensesContext(actual => ({
                    ...actual,
                    expenses: actual.expenses.filter(expense => expense.id !== id)
                }))
            }
        }
    });

    return expensesContext;
}

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext)

export const ExpensesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ExpensesContext.Provider value={useExpensesValue()}>
            {children}
        </ExpensesContext.Provider>
    )
}


