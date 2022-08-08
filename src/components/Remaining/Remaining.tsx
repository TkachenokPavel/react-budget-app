import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { useRemaining } from '../../hooks/useRemaining';
import { RemainingValue, StyledRemaining } from './styles'

export const Remaining = () => {
    const { currencyOption } = useCurrencyContext();
    const remaining = useRemaining();

    return (
        <StyledRemaining>
            <RemainingValue>Remaining: {currencyOption?.value}{remaining}</RemainingValue>
        </StyledRemaining>
    )
}
