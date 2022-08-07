import { Budget } from "./components/Budget/Budget";
import { Remaining } from "./components/Remaining/Remaining";
import { Spent } from "./components/Spent/Spent";
import { Title } from "./components/Title/Title";
import { Expenses } from "./components/Expenses/Expenses";
import { Header, Wrapper } from "./ui/base";

function App() {
  return (
    <Wrapper>
      <Header>
        <Title title='Budget App'></Title>
        <Budget />
        <Remaining />
        <Spent />
      </Header>
      <Expenses />
    </Wrapper>
  )
}

export default App;
