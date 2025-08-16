import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import React, { useState, useRef} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { handleOAuth } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "expo-router";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [focusField, setFocusField] = useState(null);

  const pathname = usePathname();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setFocusField(null);
  }

  const handleLogin = async () => {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: pathname,
    })
  }

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
    <View className="flex-1 w-full h-full py-8 px-16 justify-center items-center">
      {/* Header Text */}
      <View className=" items-center mb-6 ">
        <Text className="text-textColor font-bold text-6xl tracking-wider no-clip-text">
          Sign In!
        </Text>
      </View>

      {/* Email Input */}
      <View className="bg-textBoxColor flex-row justify-center items-center mb-4 py-2 px-8 w-3/4 rounded-full">
        <FontAwesome name="user" size={18} color="#cc5e43" className="mr-3" />
        <TextInput
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholder={isEmailFocused ? "" : "Email Address"}
          className="flex-1 text-black pr-2"
          placeholderTextColor="#293241"
        />
      </View>

      {/* Password Input */}
      <View className="bg-textBoxColor flex-row justify-center items-center py-2 px-8 w-3/4 mb-8 rounded-full">
        <FontAwesome name="lock" size={18} color="#cc5e43" className="mr-3" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          placeholder={!isPasswordFocused && password === "" ? "Password" : ""}
          secureTextEntry={!showPassword}
          className="flex-1 text-black pr-2"
          placeholderTextColor="#293241"
        />

        <Pressable onPress={() => setShowPassword((prev) => !prev)}>
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={18}
            color="#cc5e43"
          />
        </Pressable>
      </View>

      {/* Sign In Button */}
      <View className="w-full items-center">
        <TouchableOpacity className="w-3/4 px-2 py-4 bg-secondaryColor items-center rounded-full"
        onPress={handleLogin}>
          <Text className="text-primaryColor text-xl font-semibold tracking-wider">
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="flex-row items-center my-6 w-3/4">
        <View className="flex-1 h-px bg-secondaryColor" />
        <Text className="mx-3 text-secondaryColor text-sm">
          Or continue with
        </Text>
        <View className="flex-1 h-px bg-secondaryColor" />
      </View>

      {/* Google Button */}
      <View className="w-full items-center mb-4">
        <TouchableOpacity className="w-3/4 px-2 py-4 items-center rounded-full bg-slate-200">
          <View className="flex-row items-center">
            <FontAwesome
              name="google"
              size={15}
              color="#293241"
              className="mr-3"
            />
            <Text className="font-medium text-textColor">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Facebook Button */}
      <View className="w-full items-center">
        <TouchableOpacity className="w-3/4 px-2 py-4 items-center rounded-full bg-facebookBlue"
        onPress={() => handleOAuth("facebook", pathname)}>
          <View className="flex-row items-center">
            <FontAwesome
              name="facebook"
              size={15}
              color="#f2ffff"
              className="mr-2"
            />
            <Text className="font-medium text-primaryColor">
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
