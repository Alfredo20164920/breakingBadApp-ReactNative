import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { CharacterInterface } from '../../interfaces/interfaces';

const Stack = createNativeStackNavigator();

export type MainParams = {
    Splash: undefined, 
    Login: undefined,
    Home: undefined,
    CharacterProfile: CharacterInterface,
}

const Component = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
            headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CharacterProfile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default Component