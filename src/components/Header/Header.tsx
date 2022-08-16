import { Budget } from "../Budget/Budget"
import { CustomSelect } from "../CustomSelect/CustomSelect"
import { Remaining } from "../Remaining/Remaining"
import { Spent } from "../Spent/Spent"
import { Title } from "../Title/Title"
import { StyledHeader, TitleWrapper } from "./styles"

export const Header = () => {
    return (
        <StyledHeader>
            <TitleWrapper>
                <Title title='Budget App' />
                <CustomSelect />
            </TitleWrapper>
            <Budget />
            <Remaining />
            <Spent />
        </StyledHeader>
    )
}
