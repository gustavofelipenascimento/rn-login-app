import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{
                        title: 'Login'
                    }} />
                    <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                    options={{
                        title: 'Register'
                    }} />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        title: 'Home'
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

