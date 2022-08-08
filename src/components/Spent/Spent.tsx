import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { SpentValue, StyledSpent } from './styles'

export const Spent = () => {
    const { currencyOption } = useCurrencyContext()

    return (
        <StyledSpent>
            <SpentValue>Spent so far: {currencyOption?.value}200</SpentValue>
        </StyledSpent>
    )
}
