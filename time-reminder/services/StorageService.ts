import AsyncStorage from "@react-native-async-storage/async-storage";

const set = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        throw new Error("Error");
    }
};

const get = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        throw new Error("Error");

    }
};

const StorageService = {
    get,
    set,
};

export default StorageService;