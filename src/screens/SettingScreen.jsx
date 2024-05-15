import { useEffect } from "react";
import { Switch } from "react-native-paper";
import { styles } from "../config/styles";
import { View } from "react-native-web";

const SettingsScreen = ({ onThemeChange }) => {
    const [isDarkTheme, setIsDarkTheme ] = useState(false);
    
    useEffect(() => {
        const loadTheme = async() => {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme !== null) {
                setIsDarkTheme(savedTheme === 'dark');
            }
        }
        
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = !isDarkTheme ? "dark" : "light";
        setIsDarkTheme(!isDarkTheme);
        await AsyncStorage.setItem("theme",newTheme);
        onThemeChange(newTheme);
    }
    return (
        <View style={styles.container}>
            <Switch value={isDarkTheme} onValueChange={toggleTheme}/>
        </View>
    )
}

export default SettingsScreen;