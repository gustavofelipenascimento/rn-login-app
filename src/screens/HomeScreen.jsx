import { Button, View } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "../config/styles";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>You're Welcome to the our app</Text>
                <Button
                    onPress={() => {
                        navigation.navigate('LoginScreen')
                    }}
                    mode='contained'
                >
                    Login
                </Button>
            </View>
        </View>
    );
}