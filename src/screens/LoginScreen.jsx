import { useState } from "react";
import { View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function mkLogin() {
    if (password !== "" && email !== "") {
    } else {
      setErr("Please, insert your email and password");
    }
    firebaseLogin();
  }

  async function firebaseLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.email);
      if (user) {
        navigation.navigate("Home");
      } else {
        setErr("Error logging in");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  // // function mkLogin(){
  //     console.log("Do your sign up")
  //     if (email===""){
  //         setErro({ ...err, email: true})
  //     }else{
  //         setErro({ ...err, email: false})
  //     }
  // }

  return (
    <Surface style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Do your Sign In</Text>
        <TextInput
          placeholder="Insert your e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Insert your password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />
        <View>
          <Button onPress={mkLogin} mode="contained">
            Sign In
          </Button>
        </View>
        <Button onPress={() => navigation.navigate("Register")}>Sign Up</Button>
        <Text style={styles.error}>{err}</Text>
      </View>
    </Surface>
  );
}
