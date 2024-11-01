import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function NewSetInput() {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const addSet = () => {
    console.warn("add set: ", reps, weight);
    setReps("");
    setWeight("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          value={reps}
          onChangeText={setReps}
          placeholder="Reps"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight"
          style={styles.input}
          keyboardType="numeric"
        />
        <Button title={"Add"} onPress={addSet} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
});
