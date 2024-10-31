import React from "react";
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "All My Goals" }}
        />
        <Stack.Screen name="Details" component={GoalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
