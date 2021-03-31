import AsyncStorage from '@react-native-async-storage/async-storage';

const key='@user-image';

const storeData = async(value)=>{

    try{
        await AsyncStorage.setItem(key, value);
    }
    catch(err)
    {
        console.log(err);
    }
};

const getData = async()=>{

    try{
        const value = await AsyncStorage.getItem(key);
        return value;
    }
    catch(err)
    {
        console.log(err);
    }
}

export default {
    storeData,
    getData
}
