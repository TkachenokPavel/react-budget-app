import { Budget } from "./components/Budget/Budget";
import { Title } from "./components/Title/Title";
import { Wrapper } from "./ui/base";

function App() {
  return (
    <Wrapper>
      <Title title='Budget App'></Title>
      <Budget />
    </Wrapper>
  )
}

export default App;
