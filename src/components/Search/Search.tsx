import { useEffect } from 'react'
import { useExpensesContext } from '../../context';
import { useDebounce } from '../../hooks/useDebounce';
import { useInput } from '../../hooks/useInput';
import { StyledSearch } from './styles'

interface IProps {
    filterExpenses: (searchRequest: string) => void
}

export const Search = ({ filterExpenses }: IProps) => {
    const searchInput = useInput();
    const debouncedValue = useDebounce(searchInput.value, 500);
    const { expenses } = useExpensesContext();

    useEffect(() => {
        filterExpenses(debouncedValue)
    }, [debouncedValue, expenses]);

    return (
        <StyledSearch
            type='text'
            placeholder='search...'
            name='search'
            {...searchInput} />
    )
}
