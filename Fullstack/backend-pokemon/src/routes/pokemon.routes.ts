import pokemonCreateController from "../controllers/pokemon/pokemonCreate.controller";
import PokemonListController from "../controllers/pokemon/pokemonList.controller";
import pokemonDeleteController from "../controllers/pokemon/pokemonDelete.controller";
import pokemonListOneController from "../controllers/pokemon/pokemonListOne.controller";
import pokemonUpdateController from "../controllers/pokemon/pokemonUpdate.controller";
import pokemonFIlterController from "../controllers/pokemon/pokemonFilter.controller";
import { verifyNamelExist } from "../middlewares/verifyNamePokemon.middleware";

import { Router } from "express";

const routesPokemon = Router();

routesPokemon.post("", verifyNamelExist, pokemonCreateController);
routesPokemon.get("", PokemonListController);
routesPokemon.get("/:id", pokemonListOneController);
routesPokemon.get("/filter/:name", pokemonFIlterController);
routesPokemon.patch("/:id", pokemonUpdateController);
routesPokemon.delete("/:id", pokemonDeleteController);

export default routesPokemon;
