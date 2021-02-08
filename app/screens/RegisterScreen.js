import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import LongButton from '../components/LongButton';

import Screen from '../components/Screen';
import SocialTray from '../components/SocialTray';
import defaultStyles from '../config/styles'; 

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>

            <Image 
            style={styles.logo}
            source={require("../../assets/logo.png")}/>

            <AppTextInput
            name="name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"/>

            <AppTextInput
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            />

            <AppTextInput
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            />

            <LongButton title="Register" onPress={()=>console.log("Register Pressed")}/>
            
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

export default RegisterScreen;