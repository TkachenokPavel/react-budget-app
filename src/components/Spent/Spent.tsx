import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { useSpent } from '../../hooks/useSpent';
import { SpentValue, StyledSpent } from './styles'

export const Spent = () => {
    const { currencyOption } = useCurrencyContext();
    const spent = useSpent();

    return (
        <StyledSpent>
            <SpentValue>Spent so far: {currencyOption?.value}{spent}</SpentValue>
        </StyledSpent>
    )
}
