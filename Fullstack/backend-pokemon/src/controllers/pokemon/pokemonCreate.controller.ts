import { Request, Response } from "express";
import pokemonCreateService from "../../services/pokemons/pokemonCreate.services";

const pokemonCreateController = async (req: Request, res: Response) => {
  try {
    const {
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
    } = req.body;

    const pokemon = await pokemonCreateService({
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
    });

    return res.status(201).send(pokemon);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default pokemonCreateController;
