import React, { useCallback, useEffect, useState } from "react";
import { Container, Header, InputContainer } from "./styles";
import { Goal } from "./components/Goal";
import { FlatList } from "react-native";
import { Button } from "./components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  const storeData = useCallback(async (values) => {
    try {
      const jsonValue = JSON.stringify(values);
      await AsyncStorage.setItem("data", jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getData = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("data");
      return setGoals(JSON.parse(jsonValue));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onAddGoal = () => {
    const newGoal = { text: enteredText, id: Math.random().toString() };
    setGoals((oldState) => [...oldState, newGoal]);
    setEnteredText("");
    storeData([...goals, newGoal]);
  };

  const onRemoveGoal = (id) => {
    const filteredGoals = goals.filter((item) => item.id !== id);
    setGoals(filteredGoals);
    storeData(filteredGoals);
  };

  useEffect(() => {
    getData();
  }, [storeData]);

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
