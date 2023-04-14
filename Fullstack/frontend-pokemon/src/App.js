import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Manage } from "./pages/manage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/manage-pokemon">
        <Manage />
      </Route>
    </Switch>
  );
};

export default App;
