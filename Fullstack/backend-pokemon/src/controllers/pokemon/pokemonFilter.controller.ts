import { Request, Response } from "express";
import pokemonFIlterServices from "../../services/pokemons/pokemonFilter.services";

const pokemonFIlterController = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const filter = await pokemonFIlterServices(name);

    return res.status(200).send(filter);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default pokemonFIlterController;
