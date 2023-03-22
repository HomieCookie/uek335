import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDown from "react-native-paper-dropdown";

export default function Dropdown() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [repeat, setRepeat] = useState("");
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
