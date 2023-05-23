import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { MovieContext } from "./Context";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <>
      <MovieContext>
        <StripeProvider publishableKey="pk_test_51MoTmXGJUdbsynQ9JwVzVi9LSZNxo7vdMj5XVCF3SW0VZ7oePMrgOTGuP42nXN4XumwSobyc8a6wPwwPebrhOtue00RoxarBrN">
          <StackNavigator />
          <StatusBar barStyle="light-content" backgroundColor="coral" />
        </StripeProvider>
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
