import { useState } from 'react';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { useInput } from '../../hooks/useInput';
import { BudgetButton, Total, StyledBudget, Input } from './styles'

type ButtonAction = 'Edit' | 'Save';

export const Budget = () => {
    const { currencyOption } = useCurrencyContext();
    const [buttonAction, setButtonAction] = useState<ButtonAction>('Edit');
    const { value, onChange } = useInput();

    const handleButton = (): void => {
        if (buttonAction === 'Edit') {
            setButtonAction('Save')
        } else {
            setButtonAction('Edit')
        }
    }

    return (
        <StyledBudget>
            {buttonAction === 'Edit' ?
                <Total>Budget: {currencyOption?.value}3000</Total> :
                <Input type='number' value={value} onChange={onChange} />
            }
            <BudgetButton data-action={buttonAction} onClick={handleButton}>
                {buttonAction}
            </BudgetButton>
        </StyledBudget>
    )
}
