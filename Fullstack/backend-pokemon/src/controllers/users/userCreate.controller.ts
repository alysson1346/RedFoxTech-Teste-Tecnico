import { Request, Response } from "express";

import userCreateService from "../../services/users/userCreate.services";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, is_admin, password } = req.body;

    const newUser = await userCreateService({
      name,
      email,
      password,
      is_admin,
    });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
