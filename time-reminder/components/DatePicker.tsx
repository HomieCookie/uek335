import React from "react";
import { DatePickerModal, de, registerTranslation } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

registerTranslation('de', de)

export default function DatePicker() {

    const [date, setDate] = React.useState(undefined);

    const onConfirmSingle = React.useCallback(
        (params: any) => {
            setDate(params.date);
            console.log(params.date);

        },
        [setDate]
    );

    return (
        <SafeAreaProvider>
            <View>
                <DatePickerModal
                    locale="de"
                    mode="single"
                    date={date}
                    visible={true}
                    onConfirm={onConfirmSingle}
                    onDismiss={() => { }}
                />
            </View>
        </SafeAreaProvider>
    )
}