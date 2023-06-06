import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/igLogo.png')} />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Text style={styles.icon}>Add</Text>
                    {/* <Image
                        source={{
                            uri: 'https://icons8.com/icon/38113/add-new'
                        }}
                        style={styles.icon}
                    /> */}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.icon}>Heart</Text>
                    {/* <Image
                        source={{
                            uri: 'https://icons8.com/icon/87/heart'
                        }}
                        style={styles.icon}
                    /> */}
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Text style={styles.icon}>DM</Text>
                    {/* <Image
                        source={{
                            uri: 'https://icons8.com/icon/63328/add-new'
                        }}
                        style={styles.icon}
                    /> */}
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
    icon: {
        // delete after icon add
        color: 'white',
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    }
})

export default Header;