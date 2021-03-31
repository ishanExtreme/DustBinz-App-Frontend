import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountNavigator from './AccountNavigator';
import AddButton from './AddButton';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import CameraLoader from '../components/CameraLoader';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = ()=>{


  return(
    <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen}
        options={{
            tabBarIcon: ({color, size})=> 
            <MaterialCommunityIcons name="map-search" color={color} size={size}/>
        }}/>
      <Tab.Screen
      name="CameraInitial"
      component={CameraLoader}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddButton
            onPress={() => navigation.navigate("Camera")}
          />
        ),
       
      })}
    />
        <Tab.Screen name="Account" component={AccountNavigator}
         options={{
            tabBarIcon: ({color, size})=> 
            <MaterialCommunityIcons name="account" color={color} size={size}/>
        }}/>
    </Tab.Navigator>
);}

export default HomeTabNavigator;