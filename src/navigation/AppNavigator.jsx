import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import react from "react";

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} options={{title: 'Login'}}/>
                {/* <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home'}}/> */}
                
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;