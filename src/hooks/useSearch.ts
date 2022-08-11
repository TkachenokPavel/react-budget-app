import { useState } from "react";
import { useExpensesContext } from "../context/ExpensesContext";
import { IExpense } from "../types";

export const useSearch = (): {
    searchExpenses: IExpense[],
    filterExpenses: (searchRequest: string) => void
} => {
    const { expenses } = useExpensesContext();
    const [searchExpenses, setSearchExpenses] = useState<IExpense[]>(expenses);

    const filterExpenses = (searchRequest: string): void => {
        if (searchRequest) {
            setSearchExpenses(
                expenses.filter((expense) =>
                    expense.name.toLowerCase().match(searchRequest.toLowerCase())
                )
            );
        } else setSearchExpenses(expenses)
    }

    return { searchExpenses, filterExpenses };
};