import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,
 Text} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import {useFormikContext} from 'formik';

import colors from '../config/colors';
import defaultStyles from "../config/styles";
import useAuth from '../auth/useAuth';

function FilePicker({name, setDisable}) {

    const {setFieldValue, values} = useFormikContext();
    const {user} = useAuth();

    // runs only first time when component loads up
    useEffect(()=> {
        requestPermission();
    }, []);

    // get permission to access gallery
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted)
          alert("Access required");
    
    };

    // to store image uri
    // const [image, setImage] = useState(null);

    const pickImage = async () => {
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5,
            });

            if (!result.cancelled) {
                setFieldValue(name, result);
                setDisable(false);
            }
        } catch(error){
            alert("Unable to load the image");
        }
    };

    return (
        <View style={styles.container}>
            {values[name]?<Image style={styles.image} source={{uri:values[name].uri}}/>:
            <Image style={styles.image} source={{uri:user.image}}/>}
            <TouchableOpacity style={styles.buttonContainer} onPress={pickImage}>
                <Text style={[defaultStyles.text, styles.buttonText]}>
                    CHANGE
                </Text>
                <MaterialCommunityIcons 
                name='pencil-box-multiple' 
                size={20}
                color={colors.secondary_text}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        // backgroundColor: colors.white,
        alignItems: 'center'
  
      },
      image: {
          width: 100,
          height: 100,
          borderRadius: 50,
      },
      buttonContainer: {
          backgroundColor: colors.secondary,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          borderRadius: 20,
          marginLeft: 10
      },
      buttonText: {
        paddingRight: 5,
        color: colors.secondary_text,
      }
})

export default FilePicker;