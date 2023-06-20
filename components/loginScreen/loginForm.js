import { TextInput, View, StyleSheet, Pressable, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Formik } from "formik"
import { useState } from "react"
import * as Yup from "yup"

const LoginForm = ({navigation}) => {
    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
            .required()
            .min(8, 'Your password must be at least 8 characters')
    })

    return (
        <View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={loginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={styles.wrapper}>
                            <View style={[styles.inputField,
                                {
                                    borderColor: 
                                        values.email.length > 1
                                            ? '#ccc' 
                                            : 'red'
                                } 
                            ]}>
                                <TextInput
                                    placeholderTextColor='#444'
                                    placeholder="Phone number, username or email"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    autoFocus={true}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                            </View>
                            <View style={styles.inputField}>
                                <TextInput
                                    placeholderTextColor='#444'
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    textContentType="password"
                                    autoCorrect={false}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                            </View>

                        </View>

                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text>Forgot Password</Text>
                        </View>
                        <Pressable titleSize={20} style={styles.button} onPress={handleSubmit}>
                            <Text onSubmit={handleSubmit}>Log In</Text>
                        </Pressable>

                        <View style={styles.signupConatainer}>
                            <Text>Dont have an account?</Text>
                            <TouchableOpacity onPress={()=>navigation.push('SignupScreen')}>
                                <Text> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

            </Formik>

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
        borderColor: 'black',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42
    },
    signupConatainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50

    }
})

export default LoginForm