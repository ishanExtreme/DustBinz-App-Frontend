import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ShortButton({icon, onPress, color}) {
    return (
        <TouchableOpacity style={styles.Button} onPress={onPress}>  
           <MaterialCommunityIcons name={icon} size={60} color={color} style={styles.icon}/>   
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button: {
        // backgroundColor: colors.primary,
        // borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 10,
    },

    icon: {

    }

})

export default ShortButton;