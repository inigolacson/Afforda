import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 w-full h-full py-8 px-16 justify-center items-center">
      {/* Header Text */}
      <View className="items-center mb-6">
        <Text className="font-bold text-6xl tracking-wider no-clip-text text-textColor">
          Welcome!
        </Text>
      </View>
      {/* Image or Logo */}
      <View className="border w-80 h-80 border-textColor rounded-xl mb-8 justify-center items-center">
        <Text className="font-semibold text-textColor text-sm tracking-widest ">
          Insert Logo or Artwork
        </Text>
      </View>

      {/* Sign In Button */}
      <View className="w-full mb-4 items-center">
        <Link href="/auth/login" asChild>
          <TouchableOpacity className="w-3/4 shawdow-md bg-secondaryColor py-4 px-8 rounded-full items-center">
            <Text className="text-primaryColor text-2xl tracking-widest font-bold">
              Sign in
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      {/* Sign Up Button */}
      <View className="w-full mb-4 items-center">
        <Link href="/auth/sign-up" asChild>
          <TouchableOpacity className="w-3/4 shadow-md bg-secondaryColor py-4 px-8 rounded-full items-center">
            <Text className="text-primaryColor text-2xl tracking-widest font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
