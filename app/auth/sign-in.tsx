
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import InfoModal from "../components/InfoModal";
import colors from "../constants/colors";
import { router } from "expo-router";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    let valid = true;
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignIn = () => {
    if (validate()) {
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseAndClear = () => {
    setModalVisible(false);
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Lets Sign you in</Text>
      <Text style={styles.subtitle}>Welcome back ,</Text>
      <Text style={styles.subtitle}>You've been missed</Text>

      <View style={styles.formContainer}>
        <CustomInput
          label="Email"
          placeholder="Email, phone and username"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <CustomInput
          label="Email"
          placeholder="Password"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>

        <View style={styles.signInButtonContainer}>
          <CustomButton title="Sign In" width={"100%"} onPress={handleSignIn} />
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Image source={require("../../assets/my-assets/google.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Image source={require("../../assets/my-assets/facebook.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Image source={require("../../assets/my-assets/apple.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.footerLink}>Register Now</Text>
        </TouchableOpacity>
      </View>

      <InfoModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onCloseAndClear={handleCloseAndClear}
        title="Sign In Info"
        info={{ Email: email, Password: password }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 60,
  },
  scrollContent: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 25,
    color: colors.gray,
    fontWeight: "500",
  },
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.lightGray,
  },
  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: colors.secondary,
    fontWeight: "600",
  },
  signInButtonContainer: {
    width: "100%",
    alignItems: "center",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGray,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.gray,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButton: {
    padding: 5,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  footerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  footerText: {
    color: colors.gray,
  },
  footerLink: {
    color: colors.blue,
    fontWeight: "600",
  },
  error: {
    color: "red",
    marginBottom: 8,
    marginLeft: 4,
    fontSize: 13,
  },
});
