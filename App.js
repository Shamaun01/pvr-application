import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { MovieContext } from "./Context";

export default function App() {
  return (
    <>
      <MovieContext>
        <StackNavigator />
        <StatusBar barStyle="light-content" backgroundColor="coral" />
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
