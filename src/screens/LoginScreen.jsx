import { useState } from 'react';
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen(navigation) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function realizaLogin() {
        console.log("SignIn")
    }

    return (
        <View>
            <Text>Do your Sign In</Text>
            <TextInput
                placeholder='Insert your e-mail'
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                placeholder='Insert your password'
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button onPress={realizaLogin}>Sign In</Button>
            <Button onPress={() => navigation.navigate("RegisterScreen")}>
                Sign Up </Button>
        </View>
    )
}