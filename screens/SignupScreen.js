import { View, Image, StyleSheet } from "react-native"
import SignupForm from "../components/signupScreen/SignupForm"

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/loginIgLogo.jpeg")} />
            </View>
            <SignupForm navigation={navigation}/>
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

export default SignupScreen