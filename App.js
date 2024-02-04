import React, { useEffect, useState } from "react";
import { Container, Header, InputContainer } from "./styles";
import { Goal } from "./components/Goal";
import { FlatList } from "react-native";
import { Button } from "./components/Button";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  const onAddGoal = () => {
    setGoals((oldState) => [
      ...oldState,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setEnteredText("");
  };

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const onRemoveGoal = (id) => {
    return setGoals(goals.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Header>
        <InputContainer
          value={enteredText}
          placeholder="Enter your goals"
          onChangeText={setEnteredText}
        />
        <Button onPress={onAddGoal} />
      </Header>

      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <Goal
            id={item.id}
            onPress={() => onRemoveGoal(item.id)}
            item={item.text}
          />
        )}
      />
    </Container>
  );
};

export default App;
