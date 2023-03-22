import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Notification() {
  //   const [times, SetTime] = useState<any>();
  //   const [dates, SetDates] = useState<any>();

  useEffect(() => {}, []);

  function checkIfNodificationShouldSend() {
    let date = new Date();
    let time = "hallo";
    if (time == "hallo") {
      schedulePushNotification();
      console.log(date);
    } else {
      console.log("hoii", time);
    }
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Button
        title="Press to schedule a notification"
        onPress={() => checkIfNodificationShouldSend()}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Dont forget your Fertigmeldung",
      body: "hoiiiiiiiii",
      data: { data: "goes here" },
    },
    trigger: { seconds: 5 },
  });
}
