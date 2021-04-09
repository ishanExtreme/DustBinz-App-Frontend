import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LongButton from './app/components/LongButton';
import Screen from './app/components/Screen';
import SocialTray from './app/components/SocialTray';
import LoginScreen from './app/screens/LoginScreen';
import MapScreen from './app/screens/MapScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/NavigationTheme';

import { StyleSheet, View, Dimensions } from 'react-native';

import { Rating, AirbnbRating } from 'react-native-ratings';
import colors from './app/config/colors';
import AccountScreen from './app/screens/AccountScreen';
import AccountNavigator from './app/navigation/AccountNavigator';
import CameraScreen from './app/screens/CameraScreen';
import CameraPriviewScreen from './app/screens/CameraPriviewScreen';
import HomeNavigator from './app/navigation/HomeNavigator';
import HomeTabNavigator from './app/navigation/HomeTabNavigator';
import authStorage from './app/auth/storage';
import AuthContext from './app/auth/context';
import { useState } from 'react';
import FilePicker from './app/components/FilePicker';
import AccountEditScreen from './app/screens/AccountEditScreen';
import ChangePassword from './app/components/ChangePassword';
import Ratings from './app/components/Ratings';


export default function App() {

  const restoreUser = async ()=> {
    const user = await authStorage.getUser();

    if(user){
      user.image = `https://dustbinz-app.s3.ap-south-1.amazonaws.com/${user.imageKey}`;
      setUser(user);
    }

  }
  const [user, setUser] = useState();
  restoreUser();
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer
      theme={navigationTheme}>
        {user?<HomeNavigator/>:<AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>

    )
}

