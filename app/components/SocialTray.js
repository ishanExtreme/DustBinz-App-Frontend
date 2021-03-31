import React from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';



function SocialTray({onPress, OnGoogleLogin}) {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="facebook" size={50} color={colors.secondary_text} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={OnGoogleLogin}>
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
    },
    modal : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer : {
        backgroundColor : 'white',
        width : '90%',
        height : '90%',
    },
})

export default SocialTray;