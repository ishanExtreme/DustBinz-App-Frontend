import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

function CameraLoader({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Proceed to Camera" onPress={()=> navigation.navigate("Camera")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default CameraLoader;