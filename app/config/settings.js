import Constants from 'expo-constants';

const setting = {
    dev: {
        apiUrl: 'https://dustbinz-backend.herokuapp.com/api',
        googleApiUrl: 'https://dustbinz-backend.herokuapp.com/api/users/google'
    },
    staging: {
        apiUrl: 'https://dustbinz-backend.herokuapp.com/api',
        googleApiUrl: 'https://dustbinz-backend.herokuapp.com/api/users/google'
    },
    prod: {
        apiUrl: 'https://dustbinz-backend.herokuapp.com/api',
        googleApiUrl: 'https://dustbinz-backend.herokuapp.com/api/users/google'
    },
}

const getCurrentSettings = ()=> {
    if(__DEV__) return setting.dev;
    if(Constants.manifest.releaseChannel === 'staging') return setting.staging;
    return setting.prod;
}

export default getCurrentSettings();