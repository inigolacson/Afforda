import { authClient } from "./auth-client";

export const handleOAuth = async (
    provider: string,
    callbackURL: string,
) => {
    await authClient.signIn.social({
        provider: provider,
        callbackURL
    })
}