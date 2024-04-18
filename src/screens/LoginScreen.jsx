import { useState } from 'react';
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles"

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    function mkLogin() {
        if (password !== "" && email !== "") {
            navigation.navigate("Home")
        }
        else {
            setErr("Please, insert your email and password")
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    Do your Sign In
                </Text>
                <TextInput
                    placeholder='Insert your e-mail'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Insert your password'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    style={styles.input}
                />
                <View>
                    <Button
                        onPress={mkLogin}
                        mode='contained'
                    >Sign In
                    </Button>
                </View>
                <Button
                    onPress={() =>
                        navigation.navigate("Register")}>
                    Sign Up
                </Button>
                <Text style={styles.error}>{err}</Text>
            </View>
        </View>
    )
}