import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { useState } from "react";
import NewSetInput from "../components/NewSetInput";

export default function ExerciseDetailsScreen() {
  const { name } = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === name);
  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }

  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Stack.Screen options={{ title: exercise.name }} />
        <View style={{ gap: 5 }}>
          <View style={styles.panel}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseSubtitle}>
              <Text style={styles.subValue}>{exercise.muscle}</Text> |{" "}
              <Text style={styles.subValue}>{exercise.equipment}</Text>
            </Text>
          </View>
          <View style={styles.panel}>
            <Text
              style={styles.instructions}
              numberOfLines={isInstructionExpanded ? 0 : 3}
            >
              {exercise.instructions}
            </Text>
            <Text
              onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
              style={styles.seeMore}
            >
              {isInstructionExpanded ? "Voir -" : "Voir +"}
            </Text>
          </View>
        </View>
        <NewSetInput />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "600",
    color: "gray",
  },
});
