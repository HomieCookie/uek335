import React from "react";
import { DatePickerModal, de, registerTranslation } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { Button } from "react-native-paper";

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

    return (
        <SafeAreaProvider>
            <View>
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                    Pick single date
                </Button>
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