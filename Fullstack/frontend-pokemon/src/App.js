import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Manage } from "./pages/manage";
import { useEffect } from "react";
import { useAuth } from "./providers/authenticad";

const App = () => {
  const { isAuthenticated, login, logout } = useAuth();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@UserAuthorization:token"));

    if (token) {
      login();
    } else {
      logout();
    }
  }, [isAuthenticated]);
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
