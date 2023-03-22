import React from "react";
import { Button, Text } from "react-native-paper";
import Dropdown from "../components/Dropdown";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation<any>();

  return (
    <>
      <Button onPress={() => navigation.navigate("Nodification")}>hoii</Button>
    </>
  );
}
