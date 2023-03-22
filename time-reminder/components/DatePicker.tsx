import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DatePickerModal, de, registerTranslation } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

registerTranslation('de', de)

export default function DatePicker() {

    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);

    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

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

    const selectedDate = `${date.getDate().toLocaleString('de-CH', { minimumIntegerDigits: 2 })}.${(date.getMonth() + 1).toLocaleString('de-CH', { minimumIntegerDigits: 2 })}.${date.getFullYear()}`

    return (
        <SafeAreaProvider style={{ maxHeight: 100 }}>
            <View>
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.container}>
                    <Text style={styles.dateText}>{selectedDate}</Text>
                    <Text style={styles.dayText}>{weekdays[date.getDay()]}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    dateText: {
        fontSize: 35,
    },
    dayText: {
        fontSize: 20,
    },
})