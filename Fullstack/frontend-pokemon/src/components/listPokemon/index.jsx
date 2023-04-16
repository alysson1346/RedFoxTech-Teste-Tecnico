import { Div, PokemonInfo, Container, ContainerBtns } from "./style";
import { FaTrashAlt } from "react-icons/fa";

const ListPokemon = ({ name, viewModal }) => {
  return (
    <Div>
      <Container>
        <PokemonInfo>
          <p>{name}</p>
          <ContainerBtns>
            <button onClick={viewModal}>Ver</button>
            <button>Editar</button>
            <button>
              <FaTrashAlt></FaTrashAlt>
            </button>
          </ContainerBtns>
        </PokemonInfo>
      </Container>
    </Div>
  );
};

export default ListPokemon;
