import React from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import SocialTray from '../components/SocialTray';
import defaultStyles from '../config/styles'; 
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';
import useAuth from "../auth/useAuth";
import { useState } from 'react';
import ErrorMessage from '../components/forms/ErrorMessage';
import googleLogin from '../auth/googleAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().max(255).label("Email"),
    password: Yup.string().required().max(255).label("Password")
});

function LoginScreen(props) {
    const loginApi = useApi(authApi.login);
    const auth = useAuth();

    const [error, setError] = useState();
    const handleSubmit = async (userInfo)=>{
        const result = await loginApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
              if(result.headers.error) setError(result.headers.error);
              // unknown error
              else setError("An unexpected error occurred.");
            }
            return;
          }
        auth.login(result.data.token);
    }

    const handleGoogleLogin = async ()=>{
        const result = await googleLogin();

        if(result)
        {
            if(result.error)
            {
                setError(result.error);
                return;
            }
            auth.login(result.token);
        }
    }

    return (
        <Screen style={styles.container}>
            <ScrollView>

                <Image 
                style={styles.logo}
                source={require("../../assets/logo.png")}/>

        
                <SocialTray OnGoogleLogin={handleGoogleLogin}/>

                <Text style={[defaultStyles.text, styles.text]}>OR</Text>

                {/* for context handleChange will handle initialValues
                and handleSubmit calls onSubmit */}
                <AppForm
                initialValues={{email:'', password:''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} style={{textAlign:'center'}} />
                    <AppFormField
                    name="email" 
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                    returnKeyType='next'
                    returnKeyLabel='next'
                    />

                    <AppFormField
                    name="password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                    returnKeyType='go'
                    returnKeyLabel='go'
                    />


                    <SubmitButton title="Login"/>
                </AppForm>

            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10,
    },
    logo:{
        width: 150,
        height: 150,
        alignSelf:'center', //overrite for particular item
        marginTop: 10,
        marginBottom: 20,
    },

    text: {
        textAlign: 'center',
    }
})

export default LoginScreen;