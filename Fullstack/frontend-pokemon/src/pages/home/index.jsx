import { Header } from "../../components/header";
import { Search } from "../../components/search";
import { CardPokemon } from "../../components/card";
import { pokemons } from "../../components/utils";
import { Grid } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Grid container flexDirection="row" justifyContent="center" gap="15px">
        {pokemons.map((elem) => (
          <CardPokemon
            id={elem.id}
            name={elem.name}
            atk={elem.atk}
            def={elem.def}
            sta={elem.sta}
            img={elem.img}
          />
        ))}
      </Grid>
    </>
  );
};
