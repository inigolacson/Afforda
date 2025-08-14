import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 w-full h-full py-8 px-16 justify-center items-center">
      {/* Image or Logo */}
      <View>
        <Text></Text>
      </View>

      {/* Sign In Button */}
      <View className="w-full mb-4 items-center">
        <Link href="/auth" asChild>
          <TouchableOpacity className="w-3/4 shawdow-md bg-black py-4 px-8 rounded-full items-center">
            <Text className="text-white text-2xl tracking-widest font-bold">
              Hi
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      {/* Sign Up Button */}
      <View className="w-full mb-4 items-center">
        <Link href="/auth/sign-up" asChild>
          <TouchableOpacity className="w-3/4 shadow-md bg-black py-4 px-8 rounded-full items-center">
            <Text className="text-white text-2xl tracking-widest font-bold">
              Hello
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
