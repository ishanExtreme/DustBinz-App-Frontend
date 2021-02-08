import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import LongButton from '../components/LongButton';

import Screen from '../components/Screen';
import SocialTray from '../components/SocialTray';
import colors from '../config/colors';
import defaultStyles from '../config/styles'; 

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>

            <Image 
            style={styles.logo}
            source={require("../../assets/logo.png")}/>

            <AppTextInput
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"/>

            <AppTextInput
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            />

            <LongButton title="LogIn" onPress={()=>console.log("Submit Pressed")}/>
            
                <Text style={[defaultStyles.text, styles.text]}>OR</Text>
    
            <SocialTray />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10
    },
    logo:{
        width: 150,
        height: 150,
        alignSelf:'center', //overrite for particular item
        marginTop: 50,
        marginBottom: 20,
    },

    text: {
        textAlign: 'center',
    }
})

export default LoginScreen;