import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import colors from '../config/colors';

import CameraScreen from '../screens/CameraScreen';
import CameraPriviewScreen from '../screens/CameraPriviewScreen';
import HomeTabNavigator from './HomeTabNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const CameraNavigator = ()=>
(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabNavigator}

        options={({route}) => {

            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
            // console.log(routeName);
            if(routeName!=="Account")
                return{
                
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: colors.primary_text
                },
                title: "DustBinz",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                
                };
            else return {headerShown: false}
    }
    }
        
        />
        <Stack.Screen name="Camera" component={CameraScreen} 
        options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Preview" component={CameraPriviewScreen}
        options={{
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: colors.primary_text
            
        }}/>
    </Stack.Navigator>
)

export default CameraNavigator;