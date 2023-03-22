import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TimePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TimePicker() {
  const [visible, setVisible] = React.useState(false);
  const [hours, setHours] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0);

  function onDismiss() {
    setVisible(false);
  }

  const onConfirm = React.useCallback(
    (params: any) => {
      setVisible(false);
      setHours(params.hours);
      setMinutes(params.minutes);
    },
    [setVisible]
  );

  const selectedTime = `${hours.toLocaleString('de-CH', {
    minimumIntegerDigits: 2,
  })}:${minutes.toLocaleString('de-CH', {
    minimumIntegerDigits: 2,
  })}`

  return (
    <SafeAreaProvider style={{ margin: 10 }}>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.text}>{selectedTime}</Text>
        </TouchableOpacity>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          hours={hours}
          minutes={minutes}
          onConfirm={onConfirm}
          use24HourClock={true}
        />
      </View>
    </SafeAreaProvider >
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
  text: {
    fontSize: 35,
  }
});
