import { router } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import InfoModal from "../components/InfoModal";
import colors from "../constants/colors";

export default function SignUpScreen() {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{
        name?: string;
        businessName?: string;
        phone?: string;
        email?: string;
        password?: string;
    }>({});
    const [modalVisible, setModalVisible] = useState(false);

    const validate = () => {
        let valid = true;
        let newErrors: typeof errors = {};

        if (!name) {
            newErrors.name = "Name is required";
            valid = false;
        }else if(name.length <4){
            newErrors.name = 'Name is too short, atleast 4 characters';
            valid = false;
        }
        if (!businessName) {
            newErrors.businessName = "Business name is required";
            valid = false;
        }
        if (!phone) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else if (!/^\d{9,9}$/.test(phone)) {
            newErrors.phone = "Phone number is invalid";
            valid = false;
        }
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

    const handleSignUp = () => {
        if (validate()) {
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => setModalVisible(false);

    const handleCloseAndClear = () => {
        setModalVisible(false);
        setName("");
        setBusinessName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setErrors({});
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={styles.title}>Lets Register Account</Text>
            <Text style={styles.subtitle}>Hello user, you have a greatful journey</Text>

            <View style={styles.formContainer}>
                <CustomInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}

                <CustomInput
                    placeholder="Business name"
                    value={businessName}
                    onChangeText={setBusinessName}
                    style={styles.input}
                />
                {errors.businessName && <Text style={styles.error}>{errors.businessName}</Text>}

                <CustomInput
                    placeholder="Phone"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    style={styles.input}
                />
                {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

                <CustomInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}

                <View style={styles.buttonContainer}>
                    <CustomButton title="Sign Up" width={"100%"} onPress={handleSignUp} />
                </View>
            </View>

            <View style={styles.loginRow}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/auth/sign-in")}>
                    <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
            </View>

            <InfoModal
                visible={modalVisible}
                onClose={handleCloseModal}
                onCloseAndClear={handleCloseAndClear}
                title="Sign Up Info"
                info={{
                    Name: name,
                    BusinessName: businessName,
                    Phone: phone,
                    Email: email,
                    Password: password,
                }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 20,
        paddingTop: 60,
    },
    contentContainer: {
        justifyContent: "flex-start",
        paddingBottom: 100,
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
        marginBottom: 20,
    },
    formContainer: {
        width: "100%",
        marginTop: 5,
    },
    input: {
        width: "100%",
        height: 50,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.lightGray,
    },
    error: {
        color: "red",
        marginBottom: 8,
        marginLeft: 4,
        fontSize: 13,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 4,
    },
    loginRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 20,
    },
    loginText: {
        color: colors.gray,
    },
    loginLink: {
        color: colors.blue,
        fontWeight: "600",
    },
});