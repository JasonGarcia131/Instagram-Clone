import { SafeAreaView } from "react-native"
import AddNewPost from "../components/newPost/AddNewPost"
import FormikPostUploader from "../components/newPost/FormikPostUploader"

const NewPostScreen = () => {
    return(
        <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
            <AddNewPost />
            <FormikPostUploader/>
        </SafeAreaView>
    )
}

export default NewPostScreen