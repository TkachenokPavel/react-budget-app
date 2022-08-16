import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToggle } from "../../hooks";
import { StyledBudget, Total, Input, BudgetButton } from "./styles";

export const Budget = () => {
    const { budget, setBudget } = useBudgetContext();
    const { currencyOption } = useCurrencyContext();
    const { value, onChange } = useInput('');
    const [isEditMode, toggleEditMode] = useToggle();

    const handleButton = (): void => {
        if (!isEditMode) {
            toggleEditMode()
        } else {
            setBudget(Number(value));
            toggleEditMode()
        }
    }

    return (
        <StyledBudget>
            {!isEditMode
                ? <Total>Budget: {currencyOption?.value}{budget}</Total>
                : <Input
                    type='number'
                    value={value}
                    onChange={onChange}
                    placeholder='Enter budget...' />
            }
            <BudgetButton onClick={handleButton}>
                {!isEditMode
                    ? 'Edit'
                    : 'Save'}
            </BudgetButton>
        </StyledBudget>
    )
}
