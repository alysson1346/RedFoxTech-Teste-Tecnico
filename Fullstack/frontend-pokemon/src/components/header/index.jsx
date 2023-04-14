import { Container, Image } from "./styles";
import { Button } from "../button";
import { FaUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const Redirect = (isLogged) => {
    if (isLogged) {
      localStorage.clear();
      history.push("/");
    } else {
      history.push("/login");
    }
  };
  return (
    <Container>
      <Image
        src={process.env.PUBLIC_URL + "/images/pokemon-logo.png"}
        alt="Logo Pokemon"
      />

      <Button
        onClick={() => {
          Redirect(false);
        }}
      >
        <FaUser />
        Login
      </Button>
    </Container>
  );
};
