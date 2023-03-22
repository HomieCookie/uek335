import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-native-paper";
import HomePage from "./pages/HomePage";
import Notification from "./components/PushNodification";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Nodification" component={Notification} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
