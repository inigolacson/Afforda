import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View className="flex-1 w-full h-full py-8 px-16 justify-center items-center">
      {/* Header Text */}
      <View className=" items-center mb-6 ">
        <Text className="font-bold text-6xl tracking-wider no-clip-text">Sign In!</Text>
      </View>
      
      {/* Email Input */}
      <View className="bg-slate-300 flex-row justify-center items-center mb-4 py-2 px-8 w-3/4 rounded-full">
      <FontAwesome name="user" size={18} color='#000000' className="mr-3"/>
      <TextInput
      value={email}
      onChangeText={setEmail}
      onFocus={() => setIsEmailFocused(true)}
      onBlur={() => setIsEmailFocused(false)}
      placeholder={isEmailFocused ? "" : "Email Address"}
      className="flex-1 text-black pr-2"
      placeholderTextColor='#3A3A3A'/>
      </View>

      {/* Password Input */}
      <View className="bg-slate-300 flex-row justify-center items-center py-2 px-8 w-3/4 rounded-full">
        <FontAwesome name="lock" size={18} color='#000000' className="mr-3"/>
        <TextInput
        value={password}
        onChangeText={setPassword}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
        placeholder={!isPasswordFocused && password === "" ? "Password" :  ""}
        secureTextEntry={!showPassword}
        className="flex-1 text-black pr-2"
        placeholderTextColor='#3A3A3A'
        />

        <Pressable onPress={() => setShowPassword((prev) => !prev)}>
          <FontAwesome
          name={showPassword ? "eye" : "eye-slash"}
          size={18}
          color='#000000'/>
          
        </Pressable>
      </View>
    </View>
  );
}
