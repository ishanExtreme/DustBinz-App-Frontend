import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import colors from '../config/colors';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const AuthNavigator = ()=>
{

    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Login" component={LoginScreen}
            options={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.primary_text
                
            }}/>
            <Stack.Screen name="Register" component={RegisterScreen}
            options={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.primary_text
                
            }}/>
            <Stack.Screen name="Locate" component={MapScreen}
            options={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.primary_text
                
            }}/>
        </Stack.Navigator>
    )
    }

export default AuthNavigator;