import Error from "./containers/Error";
import Feed from "./containers/Feed";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/smart/Header";

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
      <Router>
        <Header />
        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
