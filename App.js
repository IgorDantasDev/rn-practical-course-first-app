import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {courseGoals.map((item) => (
            <View style={styles.goals}>
              <Text key={item}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
  },
  goalsContainer: {
    flex: 1,
    marginTop: 10,
  },
  goals: {
    borderRadius: 4,
    backgroundColor: "#cacaca",
    marginBottom: 8,
    padding: 8,
  },
});

export default App;
