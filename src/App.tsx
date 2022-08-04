import { Budget } from "./components/Budget/Budget";
import { Remaining } from "./components/Remaining/Remaining";
import { Spent } from "./components/Spent/Spent";
import { Title } from "./components/Title/Title";
import { Wrapper } from "./ui/base";

function App() {
  return (
    <Wrapper>
      <Title title='Budget App'></Title>
      <Budget />
      <Remaining />
      <Spent />
    </Wrapper>
  )
}

export default App;
