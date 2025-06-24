import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
    id: "app-storage",
    encryptionKey: "your-encryption-key", // Optional: Use an encryption key for secure storage
})

export const setItem = (key: string, value: string) => {
    storage.set(key, value);
}

export const getItem = (key: string): string | null => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
}
