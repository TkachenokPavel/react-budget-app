import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { BudgetTotal, Button, StyledBudget } from './styles'

export const Budget = () => {
    const { currencyOption } = useCurrencyContext()

    return (
        <StyledBudget>
            <BudgetTotal>Budget: {currencyOption?.value}3000</BudgetTotal>
            <Button>Edit</Button>
        </StyledBudget>
    )
}
