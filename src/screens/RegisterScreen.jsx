import { useState } from 'react';
import { ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles"

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cep, setCEP] = useState('');
    const [publicspace, setPublicSpace] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [err, setError] = useState('');

    function mkRegister() {
        console.log("Register")
        if (password !== confirmPassword) {
            setError('Passwords do not match')
        }
        else if (email === '' || password === '' || confirmPassword === '' || firstName === '' || lastName === '' || city === '' || state === '' || cep === '' || publicspace === '') {
            setError('Please fill all fields')
        }
        else if (password.length <=8){
            setError('Password must be at least 8 characters')
        }
        else if(password.indexOf(' ') >= 0){
            setError('Password must not contain spaces')
        }
        else if(password.indexOf('!') < 0 || password.indexOf('@') < 0 || password.indexOf('#') < 0 || password.indexOf('$') < 0 || password.indexOf('%') < 0 || password.indexOf('^') < 0 || password.indexOf('&') < 0 || password.indexOf('*')){
            setError('Password must contain at least one special character')
        }
        else if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
            setError('Invalid e-mail')
        }
        else if(email.indexOf(' ') >= 0){
            setError('E-mail must not contain spaces')
        }
        else {
            navigation.navigate('Login')
        }
    }

    function searchCEP() {
        console.log("SearchCEP")
        let cleancep = cep.replace('-', '').trim();
        fetch(`https://viacep.com.br/ws/${cleancep}/json/`)
            .then((res) => res.json())
            .then((dados) => {
                setCEP(dados.cep)
                setPublicSpace(dados.logradouro)
                setNeighborhood(dados.bairro)
                setCity(dados.localidade)
                setState(dados.uf)
                console.log(dados)
            })
            .catch((err) => {
                console.log(err);
                StorageError('CEP is not found')
            })
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.innerContainer}>
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
                <TextInput
                    placeholder='Confirm your password'
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    placeholder='Insert your first name'
                    onChangeText={setFirstName}
                    value={firstName}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Insert your last name'
                    onChangeText={setLastName}
                    value={lastName}
                    style={styles.input}
                />
                <Text variant='headlineSmall'>Personal data</Text>
                <TextInput
                    placeholder='Insert your CEP'
                    onChangeText={setCEP}
                    value={cep}
                    keyboardType='numeric'
                    onBlur={searchCEP}
                    style={styles.input}
                    maxLength={8}
                />
                <TextInput
                    placeholder='Insert your neighborhood'
                    onChangeText={setNeighborhood}
                    value={neighborhood}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Insert your public space'
                    onChangeText={setPublicSpace}
                    value={publicspace}
                    style={styles.input}
                />
                
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <TextInput
                    placeholder='Insert your city'
                    onChangeText={setCity}
                    value={city}
                    style={{
                        ...styles.input,
                        width: "69%"
                    }}
                />
                <TextInput
                    placeholder='State'
                    onChangeText={setState}
                    value={state}
                    style={{
                        ...styles.input,
                        width: "30%"
                    }}
                />
                </View>
                <Button
                    onPress={mkRegister}
                    mode='outlined'>
                    Sign Up
                </Button>
                <Text style={styles.error}>{err}</Text>
                <Button
                    onPress={() => navigation.navigate("Login")}>
                    Back To Sign In
                </Button>
            </View>
        </View>
        </ScrollView>
    )
}