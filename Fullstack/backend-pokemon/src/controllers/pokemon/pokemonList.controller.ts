import { Request, Response } from "express";

import pokemonListService from "../../services/pokemons/pokemonList.services";

const PokemonListController = async (req: Request, res: Response) => {
  try {
    const list = await pokemonListService();
    return res.status(200).send(list);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default PokemonListController;
