import React from 'react';
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { LinearGradient } from 'expo-linear-gradient';
import gradients from '../config/gradients';

function Screen({children, style}) {
    return (
        // <SafeAreaView style={[styles.screen, style]}>

                <LinearGradient
                colors={gradients.background.color}
                style={[styles.screen, style]}
                style={[styles.screen, style]}
             >
                {children}
                </LinearGradient>

        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        // backgroundColor: "#8e9eab"
        
    },
})

export default Screen;