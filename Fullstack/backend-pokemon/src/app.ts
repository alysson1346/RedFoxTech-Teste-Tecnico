import express from "express";
import cors from "cors";
import routesUsers from "./routes/user.routes";
import routesPokemon from "./routes/pokemon.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", routesUsers);
app.use("/pokemon", routesPokemon);

export default app;
