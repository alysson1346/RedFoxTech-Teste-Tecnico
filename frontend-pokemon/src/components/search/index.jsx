import { FaFilter, FaSearch } from "react-icons/fa";
import { Container, ContainerSearchInput } from "./style";

export const Search = () => {
  return (
    <Container>
      <ContainerSearchInput>
        <input placeholder="Pesquisar pokémon" />
        <button>
          <FaSearch />
        </button>
      </ContainerSearchInput>
    </Container>
  );
};
