import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import ShortButton from './ShortButton';

import BadgeTray from './BadgeTray';


function MapOption({details}) {
    return (

        <View style={styles.Container}>
            <View style={styles.infoContainer}>
                {details?
                <>
                <Text style={styles.text}>{details.distance}</Text>
                <BadgeTray
                style={styles.badge} 
                icon="star" text={details.rating} color={colors.secondary_light}/>
                </>
                :
                <Text style={styles.text}>Select a bin</Text>
                }
            </View>
            <View style={styles.buttonContainer}>
                <ShortButton icon="chevron-left-circle" color={colors.secondary_dark}/>
                <ShortButton icon="directions" color={colors.primary_dark}/>
                <ShortButton icon="chevron-right-circle" color={colors.secondary_dark}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    badge: {
       marginLeft: 20
    },
    Container: {
        margin: 5,
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary_text,
        
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    infoContainer: {
        flexDirection: 'row' ,
        
    }
    
})

export default MapOption;