import { BudgetTotal, Button, StyledBudget } from './styles'

export const Budget = () => {
    return (
        <StyledBudget>
            <BudgetTotal>Budget: $3000</BudgetTotal>
            <Button>Edit</Button>
        </StyledBudget>
    )
}
