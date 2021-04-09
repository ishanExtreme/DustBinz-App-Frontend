import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import mapstyle from '../config/mapstyle';
import MapOption from '../components/MapOption';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import colors from '../config/colors';
import { useState } from 'react';



const map_location = [
    {
        title: "dustbin-1",
        description: "5 star dustbin",
        icon: {url: "https://dustbinz-app.s3.ap-south-1.amazonaws.com/Icons/bin_marker.png"},
        coordinate: {
            latitude: 26.939307,
            longitude: 80.942638
        },
        details:
        {

            rating: 5,
            distance: "50 m"
        }

    },
    {
        title: "dustbin-2",
        description: "4 star dustbin",
        icon: {url: "https://dustbinz-app.s3.ap-south-1.amazonaws.com/Icons/bin_marker.png"},
        coordinate: {
            latitude: 26.939394, 
            longitude: 80.943659
        },
        details:
        {

            rating: 4,
            distance: "100 m"
        }

    },
    {
        title: "dustbin-3",
        description: "3 star dustbin",
        icon: {url: "https://dustbinz-app.s3.ap-south-1.amazonaws.com/Icons/bin_marker.png"},
        coordinate: {
            latitude: 26.939480, 
            longitude: 80.942245
        },
        details:
        {

            rating: 3,
            distance: "200 m"
        }

    },

    {
        title: "ishi-1",
        description: "3 star cleanliness",
        icon: {url: "https://dustbinz-app.s3.ap-south-1.amazonaws.com/Icons/bin_marker.png"},
        coordinate: {
            latitude: 26.86492, 
            longitude: 80.9629
        },
        details:
        {

            rating: 3,
            distance: "100 m"
        }

    },

    {
        title: "ishi-2",
        description: "5 star cleanliness",
        icon: {url: "https://dustbinz-app.s3.ap-south-1.amazonaws.com/Icons/bin_marker.png"},
        coordinate: {
            latitude: 26.86418, 
            longitude: 80.9665
        },
        details:
        {

            rating: 5,
            distance: "500 m"
        }

    },

    {
        title: "ishi-3",
        description: "4 star cleanliness",
        icon: require('../../assets/icons/bin_marker.png'),
        coordinate: {
            latitude: 26.864889, 
            longitude: 80.9756
        },
        details:
        {

            rating: 4,
            distance: "100 m"
        }

    },
]


function Map(props) {

    const location = useLocation();
    const [binDetails, setBinDetails] = useState();

    return (
        <Screen style={styles.screen}>
            <View style={styles.Mapcontainer}>
            <MapView style={styles.map} 
            customMapStyle={mapstyle}
            initialRegion={location}
            showsUserLocation
            >
                {map_location.map((dustbin, index)=>(
                    <Marker 
                    key={index}
                    title={dustbin.title}
                    description={dustbin.description}
                    image={{uri: "https://dustbinz-app.s3.ap-south-1.amazonaws.com/Icons/bin_marker.png"}}
                    coordinate={dustbin.coordinate}
                    onPress={()=>setBinDetails(dustbin.details)}/>
                ))}
                
            </MapView>
            </View>
            <MapOption details={binDetails}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    Mapcontainer: {
       flex: 2,
       
    },
    map: {
        height: '100%',
      },
    screen: {
            
        paddingTop: 0
        
    }
})

export default Map;