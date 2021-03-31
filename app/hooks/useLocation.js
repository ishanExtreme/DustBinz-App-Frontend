import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async ()=> {
        try {
            
            const {granted} = await Location.requestPermissionsAsync();
            if(!granted)
            {
                return alert("Location is required for map to work, please enable it in settings->permissions");
            }
            // *************Changes are required here**********************
            const {coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
            setLocation({latitude, longitude, 
                latitudeDelta:0.00722, longitudeDelta:0.00321});

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getLocation();
    }, []);

    return location;
};

