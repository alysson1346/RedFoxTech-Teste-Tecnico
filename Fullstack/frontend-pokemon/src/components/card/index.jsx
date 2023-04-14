import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ContainerBtnsInformation, BtnATk, BtnDef, BtnSta } from "./styles";

export const CardPokemon = ({ name, atk, def, sta, img }) => {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardMedia
        component="img"
        alt="Pokeéon imagem"
        height="240"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <ContainerBtnsInformation>
          <BtnATk>{atk}</BtnATk>
          <BtnDef>{def}</BtnDef>
          <BtnSta>{sta}</BtnSta>
        </ContainerBtnsInformation>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mais</Button>
      </CardActions>
    </Card>
  );
};
