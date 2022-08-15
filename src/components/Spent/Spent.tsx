import { useCurrencyContext } from '../../context'
import { useSpent } from '../../hooks';
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
