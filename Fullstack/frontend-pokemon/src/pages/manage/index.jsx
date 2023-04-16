import { Header } from "../../components/header";
import { useAuth } from "../../providers/authenticad";
import { Redirect } from "react-router";
import { Button } from "../../components/button";
import { FlexRight } from "./style";
import { Search } from "../../components/search";
import { useState, useEffect, useCallback } from "react";
import Api from "../../services";
import ListPokemon from "../../components/listPokemon";
import ModalView from "../../components/modalView";

export const Manage = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItem = useCallback(
    (newItem) => {
      setList((prevItems) => [...prevItems, newItem]);
    },
    [setList]
  );

  useEffect(() => {
    Api.get("/pokemon")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { isAuthenticated } = useAuth();

  if (isAuthenticated === false) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header />
      <Search></Search>
      <FlexRight>
        <Button>Add Pokémon</Button>
      </FlexRight>
      {list.map((elem) => {
        return (
          <div>
            <ListPokemon name={elem.name} viewModal={handleOpen} />
            <ModalView
              id={elem.id}
              open={open}
              handleClose={handleClose}
              name={elem.name}
              objId={elem.id}
            />
          </div>
        );
      })}
    </>
  );
};
