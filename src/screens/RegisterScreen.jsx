import { useState } from 'react';
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../config/styles";

export default function RegisterScreen(navigation) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cep, setCEP] = useState('');
    const [publicspace, setPublicSpace] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.innerContainer}>
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
            <TextInput
                placeholder='Confirm your password'
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                secureTextEntry
            />
            <TextInput
                placeholder='Insert your first name'
                onChangeText={setFirstName}
                value={firstName}
            />
            <TextInput
                placeholder='Insert your last name'
                onChangeText={setLastName}
                value={lastName}
            />
            <TextInput
                placeholder='Insert your city'
                onChangeText={setCity}
                value={city}
            />
            <TextInput
                placeholder='Insert your state'
                onChangeText={setState}
                value={state}
            />
            <TextInput
                placeholder='Insert your CEP'
                onChangeText={setCEP}
                value={cep}
            />
            <TextInput
                placeholder='Insert your public space'
                onChangeText={setPublicSpace}
                value={publicspace}
            />
            <Button 
            onPress={() => navigation.navigate("LoginScreen")}>
                Back To Sign Up
            </Button>
            </View>
        </View>
    )
}