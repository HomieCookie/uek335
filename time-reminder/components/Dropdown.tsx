import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";

export default function Dropdown() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [repeat, setRepeat] = useState("");
  const repeatList = [
    {
      label: "once",
      value: 1,
    },
    {
      label: "twice",
      value: 2,
    },
    {
      label: "three times",
      value: 3,
    },
    {
      label: "four times",
      value: 4,
    },
  ];

  return (
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
  );
}
