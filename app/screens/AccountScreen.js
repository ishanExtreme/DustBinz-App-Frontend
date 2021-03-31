import React  from 'react';
import {StyleSheet, View, FlatList } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import useAuth from '../auth/useAuth';

function AccountScreen({navigation}) {

    const {user, logOut} = useAuth();
    // console.log(user.image);
    return (
    <Screen style={styles.screen}>
        <View style={styles.containerTop}>
            <ListItem title={user.name}
            subTitle={user.email}
            image={{uri:user.image}}
            onPress={()=>navigation.navigate('AccountEdit')}/>
        </View>

        <View style={styles.container}>
            <ListItem
                title="My Contributions"
                IconComponent={
                    <Icon name="archive-arrow-down" backgroundColor={colors.secondary}/>
                }
                onPress={()=>navigation.navigate('Contributions')}
            />

            <ListItem
                title="My Ranking"
                IconComponent={
                    <Icon name="account-details" backgroundColor={colors.secondary}/>
                }
                onPress={()=>navigation.navigate('Rankings',{user:'Ishan Mishra3'})}
            />
        </View>


        <ListItem title="Log Out"
        IconComponent={
            <Icon name="logout" backgroundColor={colors.secondary_dark} />
        }
        onPress={()=>logOut()}/>

    </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    containerTop: {
        marginBottom: 20
    },
    screen:{
    },
})



export default AccountScreen;