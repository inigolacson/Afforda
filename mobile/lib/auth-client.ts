import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    plugins: [
        expoClient({
            scheme: "afforda",        // deep link redirect back into Afforda app
            storagePrefix: "afforda", // namespace for stored tokens (avoids conflicts)
            storage: SecureStore,     // uses Expo Secure Store (Keychain/Keystore)
        })
    ]
})