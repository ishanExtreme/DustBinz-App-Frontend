import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function CameraScreen({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [flashOn, setFlashOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toogleFlash = ()=>{
    setFlashOn(!flashOn);
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <View style={styles.buttonContainer}>

        <TouchableOpacity
            style={styles.button}
            onPress={toogleFlash}>
            <MaterialCommunityIcons name={flashOn?'flash':'flash-off'} size={50} color={colors.light}/>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Preview')}>
        <MaterialCommunityIcons name="camera" size={50} color={colors.light}/>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="close-circle" size={50} color={colors.light}/>
        </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'flex-end',
    marginHorizontal: 30
  },
});

export default CameraScreen;
