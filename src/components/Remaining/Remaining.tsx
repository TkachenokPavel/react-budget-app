import { useState, useEffect } from 'react';
import { useBudgetContext, useCurrencyContext, useExpensesContext } from '../../context'
import { OverspendingValue, RemainingValue, StyledRemaining } from './styles'

export const Remaining = () => {
    const { currencyOption } = useCurrencyContext();
    const { budget } = useBudgetContext();
    const { expenses } = useExpensesContext();
    const [remainingValue, setRemainingValue] = useState(() => {
        return expenses.reduce((acc, expense) => acc - expense.cost, budget)
    });
    const [isOverspending, setIsOverspending] = useState<boolean>(false)

    useEffect(() => {
        setRemainingValue(expenses.reduce((acc, expense) => acc - expense.cost, budget));
        remainingValue < 0 ? setIsOverspending(true) : setIsOverspending(false)
    }, [budget, remainingValue, expenses])

    return (
        <StyledRemaining $isOverspending={isOverspending}>
            {!isOverspending
                ? <RemainingValue>Remaining: {currencyOption?.value}{remainingValue}</RemainingValue>
                : <OverspendingValue>Overspending by {currencyOption?.value}{Math.abs(remainingValue)}</OverspendingValue>
            }
        </StyledRemaining>
    )
}
