import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import Screen from './Screen';
import AppText from './AppText';
const _ = require('lodash');


function Ratings({counts, texts, ratings, setRatings}) {

    const changeRating = (count)=>{
        setRatings(count+1);
    }
    
    return (
            <View style={styles.container}>
                <AppText style={styles.text}>{texts[ratings-1]}</AppText>
                <View style={styles.ratings}>
                    {_.range(counts).map((count)=>
                    <TouchableOpacity 
                    key={count}
                    onPress={()=>changeRating(count)}>
                        <MaterialCommunityIcons
                        name="delete" 
                        size={50} 
                        color={count>=ratings?colors.medium:colors.primary_dark}/>
                    </TouchableOpacity>
                    )}
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    ratings: {
        flexDirection: "row",
        marginBottom: 10
    },

    text: {
        fontWeight: 'bold',
        color: colors.secondary_dark,
        fontSize: 20,
        marginBottom: 5        
    }
})

export default Ratings;