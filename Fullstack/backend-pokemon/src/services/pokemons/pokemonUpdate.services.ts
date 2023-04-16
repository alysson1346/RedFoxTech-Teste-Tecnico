import { AppDataSource } from "../../data-source";
import { Pokemon } from "../../entities/pokemon.entity";
import { IPokemonUpdate } from "../../interfaces/pokemon";

const pokemonUpdateServices = async (id: string, obj: IPokemonUpdate) => {
  const repository = AppDataSource.getRepository(Pokemon);
  const pokemon = repository.findOne({ where: { id: id } });

  const updatePokemon = { ...pokemon, ...obj };
  await repository.update(id, updatePokemon);
  return updatePokemon;
};

export default pokemonUpdateServices;
