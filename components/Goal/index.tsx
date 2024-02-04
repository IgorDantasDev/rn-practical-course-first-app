import React from "react";
import { Container, GoalText } from "./styles";

export const Goal = ({ item, onPress, id }) => {
  return (
    <Container onPress={onPress}>
      <GoalText id={id}>{item}</GoalText>
    </Container>
  );
};
