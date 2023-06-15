import FontAwesome from '@expo/vector-icons/FontAwesome'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Divider } from 'react-native-elements';

const BottomTabs = ({navigation}) => {

    const [isActive, setIsActive] = useState('Home')

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                <FontAwesome size={isActive === 'home' ? 35 : 15} name='home' color='white' onPress={() => setIsActive('home')} />
                <FontAwesome size={isActive === 'search' ? 35 : 15} name="search" color='white' onPress={() => setIsActive('search')} />
                <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}>
                    <FontAwesome size={isActive === 'add' ? 35 : 15} name="plus-square-o" color={'white'} onPress={() => setIsActive('add')} />
                </TouchableOpacity>
                <FontAwesome size={isActive === 'video' ? 35 : 15} name="film" color='white' onPress={() => setIsActive('video')} />

                {/* <TouchableOpacity>
                    
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10
    },
    bold: {
        fontWeight: '600'
    },
})


export default BottomTabs;