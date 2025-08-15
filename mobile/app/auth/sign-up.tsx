import { FontAwesome } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { View, Text, TextInput, Pressable, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setIsConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState (false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusField, setFocusField] = useState(null);

  const dismissKeyboard = () => {
      Keyboard.dismiss();
      setFocusField(null)
  }

  return (
    <KeyboardAvoidingView className="flex-1"
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={dismissKeyboard} accessible={false}>
            <ScrollView
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
    <View className="flex-1 py-8 px-16 w-full h-full items-center justify-center">
      {/* Header Title */}
      <View className="items-center mb-6">
      <Text className="text-4xl font-bold no-clip-text text-textColor">Create Account</Text>
      </View>
      
      {/* Email Text Box */}
      <View className="flex-row bg-textBoxColor rounded-full w-3/4 mb-4 py-2 px-8 shadow-sm justify-center items-center">
      <FontAwesome name="user" color="#cc5e43" size={15} className="mr-3"/>
      <TextInput
      value={email}
      onChangeText={setEmail}
      onFocus={() => setIsEmailFocused(true)}
      onBlur={() => setIsEmailFocused(false)}
      placeholder={isEmailFocused ? "" : "Email Address"}
      className="flex-1 text-black pr-2"
      placeholderTextColor="#293241"/>
      </View>

      {/* Password Text Box */}
      <View className="flex-row w-3/4 bg-textBoxColor rounded-full mb-4 py-2 px-8 items-center justify-center">
      <FontAwesome name="lock" size={15} color="#cc5e43" className='mr-3'/>
      <TextInput
      value={password}
      onChangeText={setPassword}
      onFocus={() => setIsPasswordFocused(true)}
      onBlur={() => setIsPasswordFocused(false)}
      placeholder={isPasswordFocused ? "" : "Password"}
      className="flex-1 text-black pr-2"
      secureTextEntry={!showPassword}
      placeholderTextColor="#293241"
      />

      <Pressable onPress={() => setShowPassword((prev) => !prev)}>
        <FontAwesome
        name={showPassword ? "eye" : "eye-slash"}
        size={18}
        color="#cc5e43"/>
        </Pressable>      
      </View>

      {/* Confirm Password Text Box */}
      <View className="flex-row bg-textBoxColor rounded-full py-2 px-8 w-3/4 mb-8 justify-center items-center">
        <FontAwesome name="lock" size={15} color="#cc5e43" className="mr-3"/>
        <TextInput
        value={confirmPassword}
        onChangeText={setIsConfirmPassword}
        onFocus={() => setIsConfirmPasswordFocused(true)}
        onBlur={() => setIsConfirmPasswordFocused(false)}
        placeholder={isConfirmPasswordFocused ? "" : "Confirm Password"}
        className="flex-1 pr-2 text-black"
        secureTextEntry={!showConfirmPassword}
        placeholderTextColor="#293241"/>
        <Pressable onPress={() => setShowConfirmPassword((prev) => !prev)}>
          <FontAwesome
          name={showConfirmPassword ? "eye" : "eye-slash"}
          size={18}
          color="#cc5e43"/>
        </Pressable>
      </View>

      {/* Sign up Button */}
      <View className="w-full items-center">
        <TouchableOpacity className="w-3/4 px-2 py-4 bg-secondaryColor rounded-full items-center">
          <Text className="font-bold text-xl text-primaryColor">Sign up!</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="flex-row items-center my-6 w-3/4">
        <View className="flex-1 h-px bg-secondaryColor"/>
        <Text className="mx-3 text-secondaryColor text-sm">Or continue with</Text>
        <View className="flex-1 h-px bg-secondaryColor"/>
      </View>

      {/* Google Button */}
    <View className="w-full items-center mb-4">
      <TouchableOpacity className="w-3/4 bg-slate-200 py-4 px-8 items-center rounded-full">
      <View className="items-center flex-row">
        <FontAwesome name="google" size={15} color="#293241" className="mr-3"/>
        <Text className="font-medium text-textColor">Sign up with Google</Text>
        </View>
      </TouchableOpacity>
    </View>

      {/* Facebook Button */}
      <View className="w-full items-center mb-4">
        <TouchableOpacity className="w-3/4 bg-facebookBlue py-4 px-8 items-center rounded-full">
          <View className="items-center flex-row">
            <FontAwesome name="facebook" size={15} color="#f2ffff" className="mr-2"/>
            <Text className="font-medium text-primaryColor">Sign up with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
