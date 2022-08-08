import { useExpensesContext } from '../../context'

export const ExpensesList = () => {
    const { expenses } = useExpensesContext()

    return (
        <ul>
            {expenses.map((expense) => {
                return <li key={expense.id}> {expense.name} {expense.id}</li>
            })}
        </ul >
    )
}
