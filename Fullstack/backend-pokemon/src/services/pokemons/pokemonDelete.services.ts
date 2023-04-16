import { AppDataSource } from "../../data-source";
import { Pokemon } from "../../entities/pokemon.entity";

const pokemonDeleteService = async (id: string) => {
  const repository = AppDataSource.getRepository(Pokemon);
  await repository.delete(id);
  return "";
};

export default pokemonDeleteService;
