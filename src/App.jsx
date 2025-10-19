import styled from "styled-components";
import Globalstyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const StyleApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <Globalstyles />
      <div>Hello world</div>;
    </>
  );
}

export default App;
