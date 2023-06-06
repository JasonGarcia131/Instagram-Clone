import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { USERS } from "../../data/User"

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={{ color: 'white' }}>
                            {
                                story.user.length > 11 
                                    ? story.user.slice(0, 10).toLocaleLowerCase() + '...' 
                                    : story.user.toLocaleLowerCase()
                            }
                        </Text>
                    </View>
                ))}
            </ScrollView>
            {/* <Text style={{ color: 'white' }}>Stories</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3
    }
})

export default Stories