import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import TimePicker from "./components/TimePicker";
import DatePicker from './components/DatePicker';

export default function App() {

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <TimePicker />
      <DatePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48233C",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#CAC4D0",
  },
});
