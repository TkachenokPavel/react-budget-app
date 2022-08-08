import { useEffect, useState } from "react";
import { useExpensesContext } from "../context";

export const useSpent = (): number => {
    const { expenses } = useExpensesContext();
    const [spentValue, setSpentValue] = useState<number>(() => {
        return expenses.reduce((acc, expense) => {
            return acc += expense.cost
        }, 0);
    })

    useEffect(() => {
        setSpentValue(expenses.reduce((acc, expense) => {
            return acc += expense.cost
        }, 0))
    }, [expenses])

    return spentValue;
}