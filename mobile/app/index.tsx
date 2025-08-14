import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      {/* Image or Logo */}
      <View>
        <Text></Text>
      </View>

      {/* Sign In Button */}
      <View className="items-center w-3/4 mb-4">
        <Link href="/auth" asChild>
          <TouchableOpacity>
            <Text>Hi</Text>
          </TouchableOpacity>
        </Link>
      </View>
      {/* Sign Up Button */}
      <View>
        <Link href="/auth/sign-up" asChild>
          <TouchableOpacity>
            <Text>Hello</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
