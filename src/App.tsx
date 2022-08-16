import { Expenses } from "./components/Expenses/Expenses";
import { Wrapper } from "./ui/base";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Expenses />
      <Form />
    </Wrapper>
  )
}