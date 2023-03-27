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

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + "-" + month + "-" + year; //format: d-m-y;
  };

  const getSetDate = () => {
    var date = dates.getDate();
    var month = dates.getMonth() + 1;
    var year = dates.getFullYear();

    return date + "-" + month + "-" + year; //format: d-m-y;
  };

  function checkIfNodificationShouldSend() {
    StorageService.get("date").then((date) => {
      if (date) {
        SetDates(new Date(date));
      }
    });

    if (getCurrentDate() == getSetDate()) {
      schedulePushNotification();
      console.log(dates);
    } else {
      console.log("hoii", getCurrentDate(), getSetDate());
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
    trigger: { seconds: 1000 },
  });
}
