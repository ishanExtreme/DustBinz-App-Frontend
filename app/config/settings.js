import Constants from 'expo-constants';

const setting = {
    dev: {
        apiUrl: 'http://192.168.29.26:3000/api',
        googleApiUrl: 'https://tender-dragonfly-32.loca.lt/api/users/google'
    },
    staging: {
        apiUrl: 'http://192.168.29.26:3000/api',
        googleApiUrl: 'https://tender-dragonfly-32.loca.lt/api/users/google'
    },
    prod: {
        apiUrl: 'http://192.168.29.26:3000/api',
        googleApiUrl: 'https://tender-dragonfly-32.loca.lt/api/users/google'
    },
}

const getCurrentSettings = ()=> {
    if(__DEV__) return setting.dev;
    if(Constants.manifest.releaseChannel === 'staging') return setting.staging;
    return setting.prod;
}

export default getCurrentSettings();