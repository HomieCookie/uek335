import React from "react";
import { View, Text } from "react-native";
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
      console.log(params);
    },
    [setVisible]
  );

  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Button
          onPress={() => setVisible(true)}
          uppercase={false}
          mode="outlined"
        >
          Pick time
        </Button>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          hours={12}
          minutes={14}
          onConfirm={onConfirm}
        />
      </View>
    </SafeAreaProvider>
  );
}
