import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function SocialTray({onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="facebook" size={50} color={colors.secondary_text} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="google" size={50} color={colors.secondary_text} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="twitter" size={50} color={colors.secondary_text} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        backgroundColor: colors.secondary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        // padding: 15,
        width: "100%",
        marginVertical: 10,

    },

    icon: {
        marginRight: 20,
    }
})

export default SocialTray;