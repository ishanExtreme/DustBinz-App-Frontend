import React, {useState} from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Image, 
    Modal,
    ToastAndroid } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import Ratings from '../components/Ratings';
import LongButton from '../components/LongButton';
import AppText from '../components/AppText';

const texts = ["Hell 🤢", "Stinky 🤮", "Average 😐", "Clean 😌", "Perfectely Maintained 😁"]

function CameraPriviewScreen({route, navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [ratings, setRatings] = useState(0);

    const handleSubmit = ()=>{

        if(ratings===0)
        { 
            ToastAndroid.show("Cleanliness Rating is Required!!", 
            ToastAndroid.SHORT)
            return;
        }

        navigation.navigate("Map");

    }

    return (

        <View style={styles.container}>
            
            {/* Get Rating Modal */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // Show toast on pressing back button
            onRequestClose={()=>{
                ToastAndroid.show("Cleanliness Rating is Required!!", 
                ToastAndroid.LONG)
            }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <AppText style={styles.text}>Cleanliness Rating</AppText>
                        <Ratings counts={5} 
                        texts={texts} 
                        ratings={ratings}
                        setRatings={setRatings}/>

                        <LongButton title="Submit" 
                        onPress={handleSubmit}
                        />
                    </View>
                </View>


            </Modal>

            <Image source={{uri:route.params.photo.uri}}
                    style={styles.image}
                    />

            <View style={styles.buttonContainer}>   
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                       setModalVisible(!modalVisible)
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
        marginHorizontal: 30,
    },
    image: {
        flex: 6
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      text: {
          marginBottom: 10,
          fontWeight: 'bold',
          color: colors.secondary_text
          
      }
})

export default CameraPriviewScreen;