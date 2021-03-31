import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function LongButton({title, onPress, disable,color="primary"}) {
    return (
        <TouchableOpacity style={[styles.Button, {backgroundColor: colors[color]}]} onPress={onPress} disabled={disable}>
           
            <Text style={[styles.text, {color: colors[`${color}_text`]}]}>{title}</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },

    text: {
        color: colors.primary_text,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

})

export default LongButton;