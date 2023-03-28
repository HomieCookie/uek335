import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TimePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StorageService from "../services/StorageService";

export default function TimePicker() {
  const [visible, setVisible] = React.useState(false);
  const [hours, setHours] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0);

  useEffect(() => {
    StorageService.get("hour").then((hour) => {
      if (hour) {
        setHours(Number(hour));
      }
    });
    StorageService.get("minute").then((minute) => {
      if (minute) {
        setMinutes(Number(minute));
      }
    });
  }, []);

  useEffect(() => {
    StorageService.set("hour", hours.toString());
    StorageService.set("minute", minutes.toString());
  }, [hours, minutes]);

  function onDismiss() {
    setVisible(false);
  }

  const onConfirm = React.useCallback(
    /**
     * This function is triggered when the selected values are confirmed and will set the selected values
     */
    (params: any) => {
      // if hours or minutes are not a number, the modal will be closed and the values will not be set
      if (isNaN(params.hours) || isNaN(params.minutes)) {
        setVisible(false);
        return;
      }

      setVisible(false);
      setHours(params.hours);
      setMinutes(params.minutes);
    },
    [setVisible]
  );

  const selectedTime = `${hours.toLocaleString("de-CH", {
    /**
     * Turns the time into a String with 2 digits for hours and minutes
     * */
    minimumIntegerDigits: 2,
  })}:${minutes.toLocaleString("de-CH", {
    minimumIntegerDigits: 2,
  })}`;

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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
  },
});
