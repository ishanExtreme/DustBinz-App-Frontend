import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

function RatingTray({text, icon, color, style}) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
            <MaterialCommunityIcons name={icon} size={30} color={color} style={styles.icon}/>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary_text,
        
    }

})

export default RatingTray;