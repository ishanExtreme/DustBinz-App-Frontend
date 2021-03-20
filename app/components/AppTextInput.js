import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import defaultStyles from '../config/styles'; 


function AppTextInput({icon, iconEdit, width='100%',style ,...otherProps}) {
    return (
       <View style={[styles.container, {width}, style]}>
           {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
           <TextInput
           placeholderTextColor={colors.medium} 
           style={defaultStyles.text} {...otherProps}/>
           <TouchableOpacity>

           {iconEdit && <MaterialCommunityIcons name={iconEdit} size={30} color={colors.secondary_dark} style={styles.icon2}/>}
           </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        
    },
    icon: {
        marginRight: 10,

    },
    icon2: {
        marginLeft: 30
    }
})

export default AppTextInput;