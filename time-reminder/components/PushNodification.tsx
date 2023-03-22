import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import StorageService from "../services/StorageService";
import React from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Notification() {
  //   const [times, SetTime] = useState<any>();
  const [dates, SetDates] = React.useState(new Date());

  useEffect(() => {}, []);

  function checkIfNodificationShouldSend() {
    StorageService.get("date").then((date) => {
      if (date) {
        SetDates(new Date(date));
      }
    });
    let date = new Date();
    let time = "hallo";

    if (time == "hallo") {
      schedulePushNotification();
      console.log(dates);
    } else {
      console.log("hoii", date, dates);
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
    trigger: { seconds: 1 },
  });
}
