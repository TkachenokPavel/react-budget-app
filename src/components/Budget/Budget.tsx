import { useState } from 'react';
import { useBudgetContext } from '../../context/BudgetContext/BudgetContext';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { useInput } from '../../hooks/useInput';
import { BudgetButton, Total, StyledBudget, Input } from './styles'

type ButtonAction = 'Edit' | 'Save';

export const Budget = () => {
    const { budget, setBudget } = useBudgetContext();
    const { value, onChange } = useInput('');
    const { currencyOption } = useCurrencyContext();
    const [buttonAction, setButtonAction] = useState<ButtonAction>('Edit');

    const handleButton = (): void => {
        if (buttonAction === 'Edit') {
            setButtonAction('Save')
        } else {
            setBudget(Number(value));
            setButtonAction('Edit')
        }
    }

    return (
        <StyledBudget>
            {buttonAction === 'Edit'
                ? <Total>Budget: {currencyOption?.value}{budget}</Total>
                : <Input
                    type='number'
                    value={value}
                    onChange={onChange}
                    placeholder='Enter budget...' />
            }
            <BudgetButton data-action={buttonAction} onClick={handleButton}>
                {buttonAction}
            </BudgetButton>
        </StyledBudget>
    )
}
