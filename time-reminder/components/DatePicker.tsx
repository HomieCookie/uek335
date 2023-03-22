import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DatePickerModal, de, registerTranslation } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StorageService from "../services/StorageService";

registerTranslation('de', de)

/**
 * DatePicker component for picking a date.
 * 
 * @returns {JSX.Element}
 */
export default function DatePicker() {

    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        StorageService.get('date').then((date) => {
            if (date) {
                setDate(new Date(date));
            } else {
                do {
                    result = new Date(year, month, offset);

                    offset--;
                } while (result.getDay() == 0 || result.getDay() == 6);

                setDate(result);
            }
        })
    }, [])

    useEffect(() => {
        StorageService.set('date', date.toString());
    }, [date])

    let offset = 0;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let result = null;

    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    /**
     * Callback for date change in single mode.
     * 
     * @param {Date} params.date - The selected date.
     * 
     * @returns {void}
     */
    const onConfirmSingle = React.useCallback(
        (params: any) => {
            setOpen(false);
            setDate(params.date);
        },
        [setDate]
    );

    /**
    * The formatted selected date string with day of the week.
    */
    const selectedDate = `${date.getDate().toLocaleString('de-CH', { minimumIntegerDigits: 2 })}.${month.toLocaleString('de-CH', { minimumIntegerDigits: 2 })}.${year}`

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