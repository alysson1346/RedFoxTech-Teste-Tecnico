import styled from "styled-components";

export const Div = styled.div`
  background-color: #f9f9f9;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;

  .closeModal {
    display: flex;
    justify-content: end;

    button {
      color: white;
      background-color: red;
      border: none;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const AttributeTitle = styled.h4`
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.p`
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  .attributes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
