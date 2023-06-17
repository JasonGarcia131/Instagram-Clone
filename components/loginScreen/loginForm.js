import { TextInput, View, StyleSheet, Pressable, Text } from "react-native"

const LoginForm = () => {
    return(
        <View>
            <View style={styles.wrapper}>
                <TextInput 
                placeholderTextColor='#444'
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
            />
            <TextInput 
                placeholderTextColor='#444'
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
                autoCorrect={false}
            />
            </View>

            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                <Text style={{color: '#6bb0F5'}}>Forgot Password</Text>
            </View>
            <Pressable titleSize={20} style={styles.button}>
                <Text>Log In</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderColor: 'black'
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42
    }
})

export default LoginForm