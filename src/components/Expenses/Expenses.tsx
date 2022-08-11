import { useExpensesContext } from '../../context'
import { useSearch } from '../../hooks/useSearch'
import { ExpensesList } from '../ExpensesList/ExpensesList'
import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import { StyledExpenses } from './styles'

export const Expenses = () => {
    const { deleteExpense } = useExpensesContext();
    const { searchExpenses, filterExpenses } = useSearch();

    return (
        <StyledExpenses>
            <Title title='Expenses' />
            <Search filterExpenses={filterExpenses} />
            <ExpensesList
                expenses={searchExpenses}
                deleteExpense={deleteExpense} />
        </StyledExpenses>
    )
}
