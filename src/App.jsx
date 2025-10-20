import styled from "styled-components";
import Globalstyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyleApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <Globalstyles />
      <StyleApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1"> the Wild Oasis </Heading>
            <div>
              <Heading as="h2"> Check in and out </Heading>
              <Button onClick={() => alert("Chick in")}> Chick in </Button>
              <Button
                variations="secondary"
                size="medium"
                onClick={() => alert("Chick Out")}
              >
                {" "}
                Chick out{" "}
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3"> Form </Heading>
            <form>
              <Input placeholder="Number of guests" />
              <Input placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
