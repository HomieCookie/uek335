import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TimePicker() {
  const [visible, setVisible] = React.useState(false);

  function onDismiss() {
    setVisible(false);
  }

  const onConfirm = React.useCallback(
    (params: any) => {
      setVisible(false);
    },
    [setVisible]
  );

  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Button
          style={styles.button}
          onPress={() => setVisible(true)}
          uppercase={false}
          mode="outlined"
        >
          Pick time
        </Button>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          hours={24}
          minutes={0}
          onConfirm={onConfirm}
          use24HourClock={true}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "#CAC4D0",
  },
  button: {
    backgroundColor: "#CAC4D0",
    borderColor: "",
  },
});
