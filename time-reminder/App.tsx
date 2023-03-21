import React from "react";
import { StyleSheet, View } from "react-native";
import DatePicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";

export default function App() {
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
