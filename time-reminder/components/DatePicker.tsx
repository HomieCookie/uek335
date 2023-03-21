import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DatePickerModal, de, registerTranslation } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

registerTranslation('de', de)

export default function DatePicker() {

    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params: any) => {
            setOpen(false);
            setDate(params.date);
        },
        [setDate]
    );

    const selectedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    return (
        <SafeAreaProvider>
            <View>
                <TouchableOpacity onPress={() => setOpen(true)} style={{ marginTop: 20 }}>
                    <Text>{selectedDate}</Text>
                </TouchableOpacity>
                <DatePickerModal
                    locale="de"
                    mode="single"
                    date={date}
                    visible={open}
                    onConfirm={onConfirmSingle}
                    onDismiss={onDismissSingle}
                />
            </View>
        </SafeAreaProvider>
    )
}