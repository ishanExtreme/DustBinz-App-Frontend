import React from 'react';
import { View, StyleSheet, TouchableOpacity,
 Text} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import defaultStyles from "../config/styles";

function IconButton({text, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={[defaultStyles.text, styles.buttonText]}>
                    {text}
                </Text>
                <MaterialCommunityIcons 
                name='lock-reset' 
                size={20}
                color={colors.secondary_text}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
        // backgroundColor: colors.white,
        alignItems: 'center'
  
      },
      buttonContainer: {
          backgroundColor: colors.secondary,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          borderRadius: 20,
      },
      buttonText: {
        paddingRight: 5,
        color: colors.secondary_text,
      }
})

export default IconButton;