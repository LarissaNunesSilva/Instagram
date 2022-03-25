// import Error from "./containers/Error";
import Feed from "./containers/Feed";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
  }
  *{
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Feed />
    </>
  );
}

export default App;
