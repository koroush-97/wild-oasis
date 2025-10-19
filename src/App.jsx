import styled from "styled-components";
import Globalstyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyleApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <Globalstyles />
      <StyleApp>
        <Heading as="h1"> the Wild Oasis </Heading>
        <Heading as="h2"> Check in and out </Heading>
        <Button onClick={() => alert("Chick in")}> Chick in </Button>
        <Button onClick={() => alert("Chick Out")}> Chick out </Button>
        <Heading as="h3"> Form </Heading>
        <Input placeholder="Number of guests" />
        <Input placeholder="Number of guests" />
      </StyleApp>
    </>
  );
}

export default App;
