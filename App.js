import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebaseSetup";
import Profile from "./components/Profile";
import PressableButton from "./components/PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const Stack = createNativeStackNavigator();

const AuthStack = <>
  <Stack.Screen name="Signup" component={Signup} />
  <Stack.Screen name="Login" component={Login} />
</>

const AppStack = <>
  <Stack.Screen
    name="Home"
    component={Home}
    options={({ navigation }) => ({
      title: "My Goals",
      headerRight: () => 
        <PressableButton
          componentStyle={{ backgroundColor: "purple" }}
          pressedFunction={() => {
            navigation.navigate("Profile");
          }}
        >
          <AntDesign name="user" size={24} color="white" />
        </PressableButton>
      })
    }
  />
  <Stack.Screen name="Details" component={GoalDetails} />
  <Stack.Screen name="Profile" component={Profile} />
</>

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
        }}
      >
        {isUserLoggedIn ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
