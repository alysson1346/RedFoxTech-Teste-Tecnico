import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Pokemon } from "../entities/pokemon.entity";

export const verifyNamelExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const repository = AppDataSource.getRepository(Pokemon);
  const nameExists = await repository.findOneBy({ name: name });

  if (nameExists) {
    return res.status(400).send({ message: "Name already exist" });
  }
  next();
};
