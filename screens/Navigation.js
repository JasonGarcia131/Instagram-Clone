import { View, Text } from "react-native"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation