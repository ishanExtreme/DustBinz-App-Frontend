import settings from '../config/settings';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

export default async ()=>{

    // get the url of the app
    const path = AuthSession.makeRedirectUri();

    const result = await AuthSession.startAsync({
        authUrl: `${settings.googleApiUrl}/${path}`,
        returnUrl: path
    });
    // In case of cancelled by user
    if(result.type==='dismiss'
    ||result.type==='cancel'||result.type==='locked'||
    result.type==='error') return;

    return result.params;
}