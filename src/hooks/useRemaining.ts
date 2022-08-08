import { useEffect, useState } from "react";
import { useBudgetContext } from "../context/BudgetContext/BudgetContext";
import { useSpent } from "./useSpent";

export const useRemaining = () => {
    const spent = useSpent();
    const { budget } = useBudgetContext();
    const [remainingValue, setRemainingValue] = useState(budget - spent);

    useEffect(() => {
        setRemainingValue(budget - spent)
    }, [spent, budget])

    return remainingValue;
}