import { createContext, FC, ReactNode, useContext, useState } from "react"

interface IExpense {
    name: string,
    cost: number,
    id: string
}

interface IExpensesContext {
    expenses: IExpense[],
    setExpense: (value: IExpense) => void,
    deleteExpenses: () => void
}

const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    setExpense: (value: IExpense) => { },
    deleteExpenses: () => { }
});

export const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => {
        return {
            expenses: [
                {
                    id: '3',
                    name: 'PS3',
                    cost: 100
                }
            ],
            setExpense: (value: IExpense) => {
                setExpensesContext((actual) => ({
                    ...actual,
                    expenses: [...actual.expenses, value]
                }))
            },
            deleteExpenses: () => {
                setExpensesContext(actual => ({
                    ...actual,
                    expenses: []
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


