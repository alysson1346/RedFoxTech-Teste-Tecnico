import { LoginForm } from "../../components/login";
import { Body } from "./styles";
import { useAuth } from "../../providers/authenticad";
import { Redirect } from "react-router";

export const Login = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to="/manage-pokemon" />;
  }
  return (
    <Body>
      <LoginForm />
    </Body>
  );
};
