import { AppDataSource } from "../../data-source";
import { Pokemon } from "../../entities/pokemon.entity";
import { IPokemonCreate } from "../../interfaces/pokemon";

const pokemonCreateService = async ({
  name,
  pokedex_number,
  img_name,
  generation,
  evolved,
  family_id,
  cross_gen,
  type_1,
  type_2,
  weather_1,
  Weather_2,
  stat_total,
  atk,
  def,
  sta,
  legendary,
  aquireable,
  spawns,
  regional,
  raidable,
  hatchable,
  shiny,
  nest,
  newPokemon,
  not_gettable,
  future_evolve,
  cp40,
  cp39,
}: IPokemonCreate) => {
  const repository = AppDataSource.getRepository(Pokemon);

  const pokemon = new Pokemon();

  pokemon.name = name;
  pokemon.pokedex_number = pokedex_number;
  pokemon.img_name = img_name;
  pokemon.generation = generation;
  pokemon.evolved = evolved;
  pokemon.family_id = family_id;
  pokemon.cross_gen = cross_gen;
  pokemon.type_1 = type_1;
  pokemon.type_2 = type_2;
  pokemon.weather_1 = weather_1;
  pokemon.Weather_2 = Weather_2;
  pokemon.stat_total = stat_total;
  pokemon.atk = atk;
  pokemon.def = def;
  pokemon.sta = sta;
  pokemon.legendary = legendary;
  pokemon.aquireable = aquireable;
  pokemon.spawns = spawns;
  pokemon.regional = regional;
  pokemon.raidable = raidable;
  pokemon.hatchable = hatchable;
  pokemon.shiny = shiny;
  pokemon.nest = nest;
  pokemon.new = newPokemon;
  pokemon.not_gettable = not_gettable;
  pokemon.future_evolve = future_evolve;
  pokemon.cp40 = cp40;
  pokemon.cp39 = cp39;

  repository.create(pokemon);
  await repository.save(pokemon);

  return pokemon;
};

export default pokemonCreateService;
