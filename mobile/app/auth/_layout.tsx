import { View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <View className="flex-1 bg-[#FFFFFF]">
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      />
    </View>
  );
}
