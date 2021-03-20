import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';


import ListItem from '../components/ListItem';

import ListItemSeprator from '../components/ListItemSeperator';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';



const rankingList = [
    {
        id: 1,
        name: 'Ishan Mishra',
        rank: 1,
        contributions: 20 

    },
    {
        id: 2,
        name: 'Ishan Mishra2',
        rank: 2,
        contributions: 15 

    },
    {
        id: 3,
        name: 'Ishan Mishra3',
        rank: 3,
        contributions: 14 

    },
    {
        id: 4,
        name: 'Ishan Mishra4',
        rank: 4,
        contributions: 10 

    },
    {
        id: 5,
        name: 'Ishan Mishra5',
        rank: 5,
        contributions: 5 

    },
]

function RankingScreen({route}) {

    return (

        <Screen style={{paddingTop:0}}>
            <FlatList
            data={rankingList.sort((item1, item2)=> item2.contributions-item1.contributions)}
            keyExtractor={contrib=> contrib.id.toString()}
            renderItem={({item})=>
            <ListItem
            title = {item.name}
            subTitle= {`Contributions=${item.contributions}`}
            IconComponent = {
                <View style={styles.iconContainer}>
                    <Icon
                        color="blue"
                        name="circle"
                        size={50}
                        backgroundColor={colors.secondary}
                    />
                    <Text style={styles.iconText}>{item.rank}</Text>
                </View>
                }
            onPress={()=>console.log("Message Selected", item)}
            />}
            ItemSeparatorComponent={ListItemSeprator}
            />
        </Screen>
            


    );

}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconText: {
        position: 'absolute', 
        color: colors.secondary_text
    }
})
export default RankingScreen;