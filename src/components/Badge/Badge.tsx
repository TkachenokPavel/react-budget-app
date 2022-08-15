import { useCurrencyContext } from "../../context"
import { StyledBadge } from "./styles"

interface IProps {
    cost: number
}

export const Badge = ({ cost }: IProps) => {
    const { currencyOption } = useCurrencyContext();

    return (
        <StyledBadge>{currencyOption?.value}{cost}</StyledBadge>
    )
}
