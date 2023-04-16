import { AppDataSource } from "../../data-source";
import { Pokemon } from "../../entities/pokemon.entity";

const pokemonListOneServices = async (id: string) => {
  const repository = AppDataSource.getRepository(Pokemon);
  const listOne = repository.findOne({
    where: {
      id: id,
    },
  });

  return listOne;
};

export default pokemonListOneServices;
