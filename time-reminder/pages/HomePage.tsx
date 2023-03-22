import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import DatePicker from "../components/DatePicker";
import Dropdown from "../components/Dropdown";
import { useNavigation } from "@react-navigation/native";
import TimePicker from "../components/TimePicker";
import Notification from "../components/PushNodification";

export default function App() {
  const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text>Erinnerung Fertigmeldung</Text>
            </View>
            <View style={styles.editContainer}>
                <DatePicker />
                <TimePicker />
                <Dropdown />
                <Notification/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48233C",
    alignItems: "center",
  },
  editContainer: {
    flex: 1,
    backgroundColor: "#CAC4D0",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 250,
    padding: 60,
    paddingBottom: 20,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 40,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#CAC4D0",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 150,
    marginBottom: 50,
    padding: 60,
    paddingTop: 30,
    borderRadius: 20,
    marginTop: 50,
  },
});
