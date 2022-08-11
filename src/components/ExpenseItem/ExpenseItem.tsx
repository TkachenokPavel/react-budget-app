import { Badge } from "../Badge/Badge"
import { CloseButton, Item, ItemName } from "./styles"

interface IProps {
    name: string,
    cost: number,
    id: string,
    deleteExpense: (id: string) => void
}


export const ExpenseItem = ({ name, cost, id, deleteExpense }: IProps) => {
    return (
        <Item id={id}>
            <ItemName>{name}</ItemName>
            <Badge cost={cost} />
            <CloseButton onClick={() => deleteExpense(id)} />
        </Item>
    )
}
