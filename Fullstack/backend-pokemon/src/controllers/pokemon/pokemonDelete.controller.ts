import { Request, Response } from "express";
import pokemonDeleteService from "../../services/pokemons/pokemonDelete.services";

const pokemonDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pokemonDelete = await pokemonDeleteService(id);

    return res.status(200).send(pokemonDelete);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default pokemonDeleteController;
