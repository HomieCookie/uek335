import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-native-paper";
import HomePage from "./pages/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
              backgroundColor: "#252525",
            },
            headerTintColor: "#ffffff",
          }}>
            <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
