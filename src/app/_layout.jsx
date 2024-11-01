import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Workout" }} />
        <Stack.Screen name="exerciselist" options={{ title: "Exercises" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
