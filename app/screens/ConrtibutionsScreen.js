import React from 'react';
import { FlatList, StyleSheet } from 'react-native';


import ListItem from '../components/ListItem';

import ListItemSeprator from '../components/ListItemSeperator';
import Icon from '../components/Icon';
import Screen from '../components/Screen';



const contribList = [
    {
        id: 1,
        title: "Location-1",
        description: "Posted on 8 Feb",
        approved: false

    },
    {
        id: 2,
        title: "Location-2",
        description: "Posted on 8 march",
        approved: true

    },
    {
        id: 3,
        title: "Location-1",
        description: "Posted on 8 Feb",
        approved: false

    },
    {
        id: 4,
        title: "Location-2",
        description: "Posted on 8 march",
        approved: true

    },
    {
        id: 5,
        title: "Location-1",
        description: "Posted on 8 Feb",
        approved: false

    },
    {
        id: 6,
        title: "Location-2",
        description: "Posted on 8 march",
        approved: true

    },
    {
        id: 7,
        title: "Location-1",
        description: "Posted on 8 Feb",
        approved: false

    },
    {
        id: 8,
        title: "Location-2",
        description: "Posted on 8 march",
        approved: true

    },
    {
        id: 9,
        title: "Location-1",
        description: "Posted on 8 Feb",
        approved: false

    },
    {
        id: 10,
        title: "Location-2",
        description: "Posted on 8 march",
        approved: true

    },
]

function ContributionList(props) {

    return (

        <Screen style={{paddingTop:0}}>
            <FlatList
            data={contribList}
            keyExtractor={contrib=> contrib.id.toString()}
            renderItem={({item})=>
            <ListItem
            title = {item.title}
            subTitle= {item.description}
            IconComponent = {
                <Icon 
                name={item.approved?'check-circle':'close-circle'} 
                backgroundColor={item.approved?'#33d812':'#d81812'}
                />}
            onPress={()=>console.log("Message Selected", item)}
            />}
            ItemSeparatorComponent={ListItemSeprator}
            />
        </Screen>
            


    );

}

const styles = StyleSheet.create({
    
})
export default ContributionList;