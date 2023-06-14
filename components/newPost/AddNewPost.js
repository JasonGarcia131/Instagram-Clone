import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <FontAwesome name='arrow-left' color={'white'} size={20} />
                </TouchableOpacity>
                <Text style={styles.headerText}>New post</Text>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25
    }
})

export default AddNewPost