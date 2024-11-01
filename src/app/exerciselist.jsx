import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ExerciseListItem from "../components/ExerciseListItem";
import exercises from "../../assets/data/exercises.json";

export default function ExerciseList() {
  const { type } = useLocalSearchParams(); // Extract type from query parameters

  // Filter exercises based on the type passed from HomeScreen
  const filteredExercises = exercises.filter(
    (exercise) => exercise.type === type
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{type}</Text>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        style={{ padding: 10 }}
        data={filteredExercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 10,
    textTransform: "capitalize",
  },
});
