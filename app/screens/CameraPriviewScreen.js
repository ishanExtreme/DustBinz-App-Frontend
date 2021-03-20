import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function CameraPriviewScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.buttonContainer}>   
        
                <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    console.log("Submit Pressed")
                }}>
                <MaterialCommunityIcons name="send-circle" size={80} color={colors.primary_light}/>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
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
})

export default CameraPriviewScreen;