import FontAwesome from '@expo/vector-icons/FontAwesome'
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Divider } from 'react-native-elements';

const BottomTabs = () => {

    const [isActive, setIsActive] = useState('Home')

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical'/>
             <View style={styles.container}>
            <FontAwesome name="home-solid" color='white'  onPress={()=>setIsActive('home')}/>
            <FontAwesome name="search" color='white'   onPress={()=>setIsActive('search')}/>
            <FontAwesome name="home" color='white' onPress={()=>setIsActive('shopping')}/>
            {/* <FontAwesome name="shopping" color="white"/> */}
        </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10
    }
})


export default BottomTabs;