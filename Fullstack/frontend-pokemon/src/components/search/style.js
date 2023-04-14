import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ContainerSearchInput = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 400px) {
    width: 90%;
  }

  input {
    width: 100%;
    min-height: 35px;
    border-radius: 20px 0px 0px 20px;
    border-style: none;
    padding: 0px 20px 0px 20px;
    background-color: #e7e7e7;
  }
  button {
    min-height: 35px;
    min-width: 40px;
    border-radius: 0px 20px 20px 0px;
    border-style: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
