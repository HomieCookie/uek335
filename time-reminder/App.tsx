import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import TimePicker from "./components/TimePicker";

export default function App() {
  return (
    <View style={styles.container}>
      <TimePicker />
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
