import AsyncStorage from "@react-native-async-storage/async-storage";

const set = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        throw new Error("Could not save data");
    }
};

const get = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        throw new Error("Could not get data");

    }
};

const StorageService = {
    get,
    set,
};

export default StorageService;