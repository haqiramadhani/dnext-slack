import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chat, Header, Sidebar } from "./components";
import { AppBody } from "./components/AppElements";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;
