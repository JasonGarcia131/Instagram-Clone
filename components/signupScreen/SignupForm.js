import { Formik } from "formik"
import * as Yup from 'yup'
import { Validator } from "email-validator"
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from "react-native"

const SignupForm = ({navigation}) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string()
            .required()
            .min(8, 'Your password must have 8 characters')
    })
    return(
        <View>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={SignUpFormSchema}
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
                                 placeholder="Email"
                                 autoCapitalize="none"
                                 keyboardType="email-address"
                                 textContentType="emailAddress"
                                 autoFocus={true}
                                 onChangeText={handleChange('email')}
                                 onBlur={handleBlur('email')}
                                 value={values.email}
                             />
                         </View>
                         <View style={[styles.inputField,
                             {
                                 borderColor: 
                                    values.username.length > 2
                                         ? '#ccc' 
                                         : 'red'
                             } 
                         ]}>
                             <TextInput
                                 placeholderTextColor='#444'
                                 placeholder="Username"
                                 autoCapitalize="none"
                                 textContentType="username"
                                 onChangeText={handleChange('username')}
                                 onBlur={handleBlur('username')}
                                 value={values.username}
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

                     <Pressable titleSize={20} style={styles.button} onPress={handleSubmit}>
                         <Text onSubmit={handleSubmit}>Sign Up</Text>
                     </Pressable>

                     <View style={styles.signupConatainer}>
                         <Text>Already have an account?</Text>
                         <TouchableOpacity onPress={()=>navigation.goBack()}>
                             <Text> Log In</Text>
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

export default SignupForm