import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import  LongButton from '../components/LongButton'

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
        // blurRadius={10}
        resizeMode='cover'
        style={styles.background} 
        source={require('../../assets/background.png')}
        >
        <View style={styles.loginContainer}>

        <Image style={styles.logo} source={require('../../assets/logo.png')}/>
        {/* <Text style={styles.tagline}>Dustbin Locator</Text> */}
        </View>
        <View style={styles.buttonsContainer}>
        <LongButton title="Locate Dustbin" onPress={()=> console.log("Locate")} color="primary"/>
        <LongButton title="Login" onPress={()=> console.log("Login")} color="secondary"/>
        <LongButton title="Register" onPress={()=> console.log("Register")} color="secondary"/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 150,
        height: 150,
    },

    loginContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },

    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})

export default WelcomeScreen;