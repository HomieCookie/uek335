import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import StorageService from "../services/StorageService";

export default function Dropdown() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [repeat, setRepeat] = useState(1);

  useEffect(() => {
    StorageService.get("repeat").then((repeat) => {
      if (repeat) {
        setRepeat(Number(repeat));
      }
    });
  }, []);

  useEffect(() => {
    StorageService.set("repeat", repeat.toString());
  }, [repeat]);

  const repeatList = [
    {
      label: "one",
      value: 1,
    },
    {
      label: "two",
      value: 2,
    },
    {
      label: "three",
      value: 3,
    },
    {
      label: "four",
      value: 4,
    },
  ];

  return (
    <View style={styles.component}>
      <DropDown
        label={"Repeat"}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={repeat}
        setValue={setRepeat}
        list={repeatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    minWidth: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
