import { Header } from "../../components/header";
import { Search } from "../../components/search";
import { CardPokemon } from "../../components/card";
import { Grid } from "@mui/material";
import { useAuth } from "../../providers/authenticad";
import { Redirect } from "react-router-dom";
import Api from "../../services";
import { useState, useEffect } from "react";
import ModalView from "../../components/modalView";

export const Home = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    Api.get("/pokemon")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to="manage-pokemon" />;
  }

  return (
    <>
      <Header />
      <Search />
      <Grid container flexDirection="row" justifyContent="center" gap="15px">
        {list.map((elem) => (
          <div>
            <CardPokemon
              id={elem.id}
              name={elem.name}
              atk={elem.atk}
              def={elem.def}
              sta={elem.sta}
              img={elem.img_name}
              onClick={handleOpen}
            />
            <ModalView
              id={elem.id}
              open={open}
              handleClose={handleClose}
              name={elem.name}
            />
          </div>
        ))}
      </Grid>
    </>
  );
};
