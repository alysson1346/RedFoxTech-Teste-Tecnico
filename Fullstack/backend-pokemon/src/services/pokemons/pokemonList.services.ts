import { AppDataSource } from "../../data-source";
import { Pokemon } from "../../entities/pokemon.entity";

const pokemonListService = async () => {
  const repository = AppDataSource.getRepository(Pokemon);
  const list = repository.find();

  return list;
};

export default pokemonListService;
