import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChangePassword from '../components/ChangePassword';

import colors from '../config/colors';
import AccountEditScreen from '../screens/AccountEditScreen';
import AccountScreen from '../screens/AccountScreen';
import ContributionsScreen from '../screens/ConrtibutionsScreen';
import RankingScreen from '../screens/RankingScreen';


const Stack =  createStackNavigator();

const AccountNavigator = ()=> (
    <Stack.Navigator >
        <Stack.Screen name="Account" component={AccountScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="AccountEdit" component={AccountEditScreen}
        options={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: colors.secondary,
            },
            headerTintColor: colors.secondary_text
           
            
        }}/>
        <Stack.Screen name="Contributions" component={ContributionsScreen}
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: colors.secondary,
        },
        headerTintColor: colors.secondary_text
        
    }}/>
        <Stack.Screen name="Rankings" component={RankingScreen}
        options={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: colors.secondary,
            },
            headerTintColor: colors.secondary_text
            
        }}/>

        <Stack.Screen name="ChangePassword" component={ChangePassword}
        options={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: colors.secondary,
            },
            headerTintColor: colors.secondary_text
            
        }}/>
    </Stack.Navigator>
);

export default AccountNavigator;