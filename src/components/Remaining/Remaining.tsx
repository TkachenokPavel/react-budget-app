import { useCurrencyContext } from '../../context'
import { useRemaining } from '../../hooks';
import { OverspendingValue, RemainingValue, StyledRemaining } from './styles'

export const Remaining = () => {
    const { currencyOption } = useCurrencyContext();
    const [remaining, isOverspending] = useRemaining();

    return (
        <StyledRemaining $isOverspending={isOverspending}>
            {!isOverspending
                ? <RemainingValue>Remaining: {currencyOption?.value}{remaining}</RemainingValue>
                : <OverspendingValue>Overspending by {currencyOption?.value}{Math.abs(remaining)}</OverspendingValue>
            }
        </StyledRemaining>
    )
}
