import styled from "styled-components";

export const ContainerBtnsInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.white};
  border-style: none;
  border-radius: 20px;
  padding: 5px;
  min-width: 40px;
`;

export const BtnATk = styled(Button)`
  background-color: ${(props) => props.theme.colors.atk};
`;
export const BtnDef = styled(Button)`
  background-color: ${(props) => props.theme.colors.def};
`;
export const BtnSta = styled(Button)`
  background-color: ${(props) => props.theme.colors.sta};
`;
