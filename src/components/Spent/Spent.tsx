import { useState, useEffect } from 'react';
import { useCurrencyContext, useExpensesContext } from '../../context'
import { SpentValue, StyledSpent } from './styles'

export const Spent = () => {
    const { currencyOption } = useCurrencyContext();
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

    return (
        <StyledSpent>
            <SpentValue>Spent so far: {currencyOption?.value}{spentValue}</SpentValue>
        </StyledSpent>
    )
}
