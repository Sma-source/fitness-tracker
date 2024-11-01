import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import ExerciseListItem from "../components/ExerciseListItem";
import exercises from "../../assets/data/exercises.json";

const groupExercisesByType = (exercises) => {
  return exercises.reduce((acc, exercise) => {
    const { type } = exercise;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(exercise);
    return acc;
  }, {});
};

export default function App() {
  const groupedExercises = groupExercisesByType(exercises);
  const exerciseTypes = Object.keys(groupedExercises);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        style={{ padding: 10 }}
        data={exerciseTypes}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item: type }) => (
          <Pressable style={styles.exerciseContainer}>
            <Link href={`/exerciselist?type=${type}`} asChild>
              <Text style={styles.exerciseName}>{type}</Text>
            </Link>
          </Pressable>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
