import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { RemainingValue, StyledRemaining } from './styles'

export const Remaining = () => {
    const { currencyOption } = useCurrencyContext()

    return (
        <StyledRemaining>
            <RemainingValue>Remaining: {currencyOption?.value}3000</RemainingValue>
        </StyledRemaining>
    )
}
