import { Stack } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";


export default function RootLayout() {
  return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0} 
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="auth/sign-in" />
          <Stack.Screen name="auth/register" />
        </Stack>
      </KeyboardAvoidingView>
  );
}
