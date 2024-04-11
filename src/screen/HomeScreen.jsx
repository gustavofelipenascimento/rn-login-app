import { Button, View } from "react-native"
import { Text } from "react-native-paper"


export default function HomeScreen() {
    return (
        <View>
            <Text>You're Welcome to the our app</Text>
            <Button
                onPress={() =>{
                    navigation.navigate('Login')}}
            >
                Login
            </Button>
        </View>
        );
}