import React from "react";
import { ButtonLabel, Container } from "./styles";

export const Button = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <ButtonLabel>Add</ButtonLabel>
    </Container>
  );
};
