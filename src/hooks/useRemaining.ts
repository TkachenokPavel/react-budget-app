import { useEffect, useState } from "react";
import { useBudgetContext } from "../context";
import { useSpent } from "./useSpent";

export const useRemaining = (): [number, boolean] => {
    const spent = useSpent();
    const { budget } = useBudgetContext();
    const [remainingValue, setRemainingValue] = useState<number>(budget - spent);
    const [isOverspending, setIsOverspending] = useState<boolean>(false)

    useEffect(() => {
        setRemainingValue(budget - spent);
        remainingValue < 0 ? setIsOverspending(true) : setIsOverspending(false)
    }, [spent, budget, remainingValue])

    return [remainingValue, isOverspending];
}