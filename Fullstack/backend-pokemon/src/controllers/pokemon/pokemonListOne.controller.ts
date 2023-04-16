import { Request, Response } from "express";
import pokemonListOneServices from "../../services/pokemons/pokemonListOne.services";

const pokemonListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const listOne = await pokemonListOneServices(id);

    return res.status(200).send(listOne);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default pokemonListOneController;
