import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { Divider } from "react-native-elements"
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>

        </View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: post.profile_picture }} style={styles.story} />
                <Text style={{ color: 'white', margin: 5, fontWeight: '500' }}>
                    {post.user}
                </Text>
            </View>
            <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
        </View>
    )
}

const PostImage = ({ post }) => {
    return (
        <View style={{ width: '100%', height: 450 }}>
            <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }} />
        </View>

    )
}

const PostFooter = () => {
    return (
        <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
            <View style={styles.leftFootContainer}>
                <FontAwesome name={'heart'} size={20} color={'white'} />
                <FontAwesome name={'comment'} size={20} color={'white'} />
                <FontAwesome name={'telegram'} size={20} color={'white'} />
            </View>
            <View>
                <FontAwesome name={'bookmark'} size={20} color={'white'} />
            </View>
        </View>
    )
}

const Likes = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 4}}>
            <Text style={{ color: 'white', fontWeight: '600' }}>
                {post.likes.toLocaleString('en')} likes
            </Text>
        </View>
    )
}

const Caption = ({ post }) => {
    return (
        <View style={{ marginTop: 5 }}>
            <Text style={{ color: 'white' }}>
                <Text style={{ fontWeight: '600' }}>{post.user}</Text>
                <Text> {post.caption}</Text>
            </Text>
        </View>

    )
}

const CommentsSection = ({ post }) => {
    return (
        post.comments.length > 0 ? (
            <Text style={{ color: 'grey' }}>
                View {post.comments.length > 1 ? `all ${post.comments.length} comments` : `comment`}
            </Text>
        ) : ""
    )
}

const Comments = ({ post }) => {
    return (
        <>
            {
                post.comments.map((comment, index) => (
                    <View index={index} style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={{ color: 'white' }}>
                            <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
                            {comment.comment}
                        </Text>
                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    },
    footerIcon: {
        width: 33,
        height: 33
    },
    leftFootContainer: {
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'space-between'
    }
})
export default Post;