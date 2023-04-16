import { AppDataSource } from "../../data-source";
import { Pokemon } from "../../entities/pokemon.entity";
import { Like } from "typeorm";

const pokemonFilterServices = async (name: string) => {
  const repository = AppDataSource.getRepository(Pokemon);

  const filter = await repository
    .createQueryBuilder()
    .where("name LIKE :name", { name: `%${name}%` })
    .getMany();

  return filter;
};

export default pokemonFilterServices;
