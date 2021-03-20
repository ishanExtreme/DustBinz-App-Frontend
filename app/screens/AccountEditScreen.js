import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import ErrorMessage from '../components/forms/ErrorMessage';
import FilePicker from '../components/FilePicker';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';
import IconButton from '../components/IconButton';
import useApi from '../hooks/useApi';
import uploadUserImageApi from '../api/uploadUserImage';
import updateUserApi from '../api/updateUser';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).max(255).label("Name"),
    email: Yup.string().required().email().max(255).label("Email"),
});

function AccountEditScreen({navigation}) {

    const userApi = useApi(updateUserApi.updateUser);
    const uploadImageApi = useApi(uploadUserImageApi.uploadUserImage);

    const [error, setError] = useState();

    const [changed, setChanged] = useState(true);

    const {user, login} = useAuth();

    const handleSubmit = async (userInfo)=>{
        // update userName or/and email
        let result
        if(userInfo.name !== user.name || userInfo.email !== user.email)
        {
            result = await userApi.request({name: userInfo.name, 
            email: userInfo.email});

            if (!result.ok) {

                if (result.data) setError(result.data.error);
                else setError("An unexpected error occurred.");
                
                return;
            }

        }

        if(userInfo.image !== null)
        {
            const {image} = userInfo;
            const data = new FormData();
            data.append('image', {
                uri: image.uri,
                type: 'image/jpeg',
                name: "userImage"
            });

            result = await uploadImageApi.request(data);
            console.log(result);

            if (!result.ok) {

                if (result.data) setError(result.data.error);
                else setError("An unexpected error occurred.");
                
                return;
            }
        }

        login(result.data.token);
        navigation.navigate('Account');
        //****************/ Notification->Success *******************//
        
    };

    return (
        <Screen style={styles.container}>

            {/* for context handleChange will handle initialValues
                and handleSubmit calls onSubmit */}
                <AppForm
                initialValues={{
                    name:user.name, 
                    email:user.email,
                    image: null}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} style={{textAlign:'center'}} />
                    <FilePicker name="image" setDisable={setChanged}/>
                    <AppFormField
                    name="name"
                    icon="account"
                    setDisable = {setChanged}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Name"
                    returnKeyType='next'
                    returnKeyLabel='next'
                    />

                    <IconButton text="CHANGE PASSWORD" 
                    onPress={()=>navigation.navigate("ChangePassword")}/>

                    <AppFormField
                    name="email" 
                    icon="email"
                    iconEdit="email-edit"
                    editable={false}
                    />


                    <SubmitButton title="Save" disable={changed}/>
                </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default AccountEditScreen;