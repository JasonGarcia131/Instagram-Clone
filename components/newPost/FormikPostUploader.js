import { Text, View, Image, Button } from "react-native"
import * as Yup from "yup"
import { Formik } from "formik"
import { useState } from "react"
import { TextInput } from "react-native"
import { Divider } from "react-native-elements"


const placeholderImage = 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80';
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = () => {
    const [thumbnail, setThumbnail] = useState(placeholderImage)
    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid
            }) => (
                <>
                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image
                            source={{ uri: thumbnail ? thumbnail : placeholderImage }}
                            style={{ width: 100, height: 100 }}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                placeholder="Write a caption"
                                placeholderTextColor='grey'
                                multiline={true}
                                style={{ color: 'white', fontSize: 20 }}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>

                    </View>
                    <Divider width={0.2} orientation="vertical" />
                    <TextInput
                        onChange={(e) => setThumbnail(e.nativeEvent.text)}
                        placeholder="Enter image url"
                        placeholderTextColor='grey'
                        style={{ color: 'white', fontSize: 18 }}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />

                    {errors.imageUrl && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={isValid}/>
                </>
            )}
        </Formik>

    )
}

export default FormikPostUploader