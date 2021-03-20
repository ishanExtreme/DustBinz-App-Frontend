import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import ErrorMessage from '../components/forms/ErrorMessage';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import userPassApi from '../api/change_password';


const validationSchema = Yup.object().shape({
    
    password: Yup.string().required().max(255)
    .matches(/.*\d/,"Password should contain atleast one digit")
    .matches(/.*[@$!%*?&]/,"Password should contain atleast one special character")
    .matches(/[A-Za-z\d@$!%*?&]{8,}/,"Password must contain atleast 8 characters")
    .label("Password"),
    currentPassword: Yup.string().required().max(255)
    .label('Current Password')
});

function ChangePassword({navigation}) {

    const passApi = useApi(userPassApi.change_password);

    const [error, setError] = useState();

    // const {user} = useAuth();

    const handleSubmit = async (passInfo)=>{
        const result = await passApi.request(passInfo);

        if (!result.ok) {

            if (result.data) setError(result.data.error);
            else setError("An unexpected error occurred.");
            
            return;
        }

        navigation.navigate('Account');
        //****************/ Notification->Success *******************//
        
    };

    return (
        <Screen style={styles.container}>

            {/* for context handleChange will handle initialValues
                and handleSubmit calls onSubmit */}
                <AppForm
                initialValues={{ 
                    password:"", 
                    currentPassword:""
                   }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} style={{textAlign:'center'}} />
                    
                    <AppFormField
                    name="currentPassword"
                    icon="lock-question"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Current Password"
                    textContentType="password"
                    secureTextEntry
                    returnKeyType='next'
                    returnKeyLabel='next'
                    />

                    <AppFormField
                    name="password"
                    icon="lock-reset"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="New Password"
                    textContentType="password"
                    secureTextEntry
                    returnKeyType='go'
                    returnKeyLabel='go'
                    />


                    <SubmitButton title="Change Password"/>
                </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default ChangePassword;