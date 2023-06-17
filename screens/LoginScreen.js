import { View, Text, StyleSheet, Image } from "react-native";
import LoginForm from "../components/loginScreen/loginForm";

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/loginIgLogo.jpeg")}/>
            </View>

            <LoginForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default LoginScreen