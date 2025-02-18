import { Request, Response } from "express";
import pokemonUpdateServices from "../../services/pokemons/pokemonUpdate.services";

const pokemonUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj = req.body;

    const update = await pokemonUpdateServices(id, obj);

    return res.status(200).send(update);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default pokemonUpdateController;
