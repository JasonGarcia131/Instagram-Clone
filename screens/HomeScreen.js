import { Text, SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import Header from "../components/home/Header"
import Stories from "../components/home/Stories"
import Post from "../components/home/Post"
import { POSTS } from "../data/Posts"
import BottomTabs from "../components/home/BottomsTab"

const HomeScreen = ({navigation}) => {
    return (
        // SafeView makes sure the content stays within viewable screen on any device.
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index} />
                    ))
                }
            </ScrollView>
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen