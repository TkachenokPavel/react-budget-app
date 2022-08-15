import { useState } from "react";
import { useExpensesContext } from "../context";
import { IExpense } from "../types";

export const useSearch = (): {
    searchExpenses: IExpense[],
    filterExpenses: (searchValue: string) => void
} => {
    const { expenses } = useExpensesContext();
    const [searchExpenses, setSearchExpenses] = useState<IExpense[]>(expenses);

    const filterExpenses = (searchValue: string): void => {
        if (searchValue) {
            setSearchExpenses(
                expenses.filter((expense) =>
                    expense.name.toLowerCase().match(searchValue.toLowerCase())
                )
            );
        } else setSearchExpenses(expenses)
    }

    return { searchExpenses, filterExpenses };
};