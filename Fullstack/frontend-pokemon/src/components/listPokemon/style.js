import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const PokemonInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 10px;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  button {
    border: none;
  }
`;
