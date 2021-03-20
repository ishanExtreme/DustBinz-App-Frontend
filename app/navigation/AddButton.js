import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';


function AddButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>

            <MaterialCommunityIcons name="plus-circle" color={colors.white}
            size={40}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 31,
        borderColor: colors.white,
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddButton;