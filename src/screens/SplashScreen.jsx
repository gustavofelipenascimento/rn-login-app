import { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "../config/styles";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { Surface } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User SignUp", user);
        navigation.navigate("Home");
      } else {
        console.log("No user");
        navigation.navigate("LoginScreen");
      }
    });
  }, []);

  return (
    <Surface>
      <Text styles={styles.title}>Loading...</Text>
    </Surface>
  );
}
