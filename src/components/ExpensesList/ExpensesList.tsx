import { IExpense } from '../../types'
import { ExpenseItem } from '../ExpenseItem/ExpenseItem'
import { EmptyExpensesList } from './styles'

interface IProps {
    expenses: IExpense[],
    deleteExpense: (id: string) => void,
}

export const ExpensesList = ({ expenses, deleteExpense }: IProps) => {
    if (expenses.length) {
        return (
            <ul>
                {expenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        key={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        deleteExpense={deleteExpense} />
                })}
            </ul >
        )
    }

    return (
        <EmptyExpensesList>Oooops 🙈</EmptyExpensesList>
    )
}
