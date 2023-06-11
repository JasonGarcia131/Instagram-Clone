import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Header = () => {
    return (
        <View style={styles.container}>
            {/* TouchableableOpacity makes the image touchable(clickable) */}
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/igLogo.png')} />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Text style={styles.icon}>Add</Text>
                    <FontAwesome style={styles.icon} name="plus-square-o" color={'white'} size={18}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.icon}>Heart</Text>
                    <FontAwesome style={styles.icon} name="heart" color={'white'} size={18}/>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>
                            11
                        </Text>
                    </View>
                    <Text style={styles.icon}>DM</Text>
                    <FontAwesome style={styles.icon} name="telegram" color={'white'} size={18}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    icon:{
        position: 'relative',
        top: 0
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 12,
        bottom: 9,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
})

export default Header;