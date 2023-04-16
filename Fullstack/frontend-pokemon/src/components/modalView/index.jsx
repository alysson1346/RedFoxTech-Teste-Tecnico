import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import { Div, Title, Description, Container, AttributeTitle } from "./styles";
import Api from "../../services";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ModalView = ({ open, handleClose, objId }) => {
  const [obj, setObj] = useState({});
  const classes = useStyles();
  let pokemon = obj;
  console.log(pokemon);

  useEffect(() => {
    Api.get(`/pokemon/${objId}`)
      .then((res) => {
        setObj(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function ConvertBooleans(word) {
    if (word === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Div>
            <div className="closeModal">
              <button onClick={handleClose}>x</button>
            </div>
            <Title>{pokemon.name}</Title>
            <Container>
              <div class="attributes">
                <AttributeTitle>Pokedex Number</AttributeTitle>
                <Description>{pokemon.pokedex_number}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Generation</AttributeTitle>
                <Description>{pokemon.generation}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Evolved</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.evolved)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Family id</AttributeTitle>
                <Description>{pokemon.family_id}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Cross Gen</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.cross_gen)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Type 1</AttributeTitle>
                <Description>{pokemon.type_1}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Type 2</AttributeTitle>
                <Description>{pokemon.type_2}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Weather 1</AttributeTitle>
                <Description>{pokemon.weather_1}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Weather 2</AttributeTitle>
                <Description>{pokemon.Weather_2}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Stat Total</AttributeTitle>
                <Description>{pokemon.stat_total}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Atk</AttributeTitle>
                <Description>{pokemon.atk}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Def</AttributeTitle>
                <Description>{pokemon.def}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Sta</AttributeTitle>
                <Description>{pokemon.sta}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Legendary</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.legendary)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Aquireable</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.aquireable)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Spawns</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.spawns)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Regional</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.regional)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Raidable</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.raidable)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Hatchable</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.hatchable)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Shiny</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.shiny)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Nest</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.nest)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>New</AttributeTitle>
                <Description>{ConvertBooleans(pokemon.new)}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Not Gettable</AttributeTitle>
                <Description>
                  {ConvertBooleans(pokemon.not_gettable)}
                </Description>
              </div>
              <div class="attributes">
                <AttributeTitle>Future Evolve</AttributeTitle>
                <Description>
                  {ConvertBooleans(pokemon.future_evolve)}
                </Description>
              </div>
              <div class="attributes">
                <AttributeTitle>100% @ CP40</AttributeTitle>
                <Description>{pokemon.cp40}</Description>
              </div>
              <div class="attributes">
                <AttributeTitle>100% @ CP39</AttributeTitle>
                <Description>{pokemon.cp39}</Description>
              </div>
            </Container>
          </Div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalView;
