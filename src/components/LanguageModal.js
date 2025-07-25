import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';

const LanguageModal = ({LanguageModalVisible, onLanguageModalClose}) => {
  const [selectedValue, setSelectedValue] = useState('English');

  return (
<Modal
        animationType="slide"
        transparent={true}
        visible={LanguageModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          //setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose a language</Text>

            <View style={styles.radioGroup}>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="English"
                        status={selectedValue === 'English' ? 
                                 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('English')}
                        color="#007BFF"
                    />
                    <View style={styles.languageFrench}>
                    <Text style={styles.radioLabel}>
                    English
                    </Text>
                    <Text style={styles.radioLabel2}>
                    Anglais
                    </Text>
                  </View>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="French"
                        status={selectedValue === 'French' ? 
                                'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('French')}
                        color="#007BFF"
                    />
                    <View style={styles.languageFrench}>
                    <Text style={styles.radioLabel}>
                    French
                    </Text>
                    <Text style={styles.radioLabel2}>
                    Francais
                    </Text>
                  </View>

                </View>
            </View>

          <View style={styles.actionButtonView}>
            <TouchableOpacity
              style={[ styles.buttonClose]}
              onPress={onLanguageModalClose}
              >
              <Text style={styles.buttonCloseTextStyle}>close</Text>
            </TouchableOpacity>

            <Pressable
              style={[styles.button,]}
              onPress={onLanguageModalClose}
              >
              <Text style={styles.textStyle}>Select</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    actionButtonView:{
      flexDirection: "row",
      paddingLeft: 60,
      marginTop: 20,
      gap: 10,
    },
    button: {
      borderRadius: 10,
      paddingHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
      elevation: 2,
      backgroundColor: '#2196F3',
    },
    buttonClose:{
      padding: 10,
    },
    buttonCloseTextStyle:{
      color: "#2196F3",
      fontWeight: "800"
    },
    languageFrench: {
      flexDirection: "column",
    },
    radioLabel2: {
      fontSize: 10,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      fontSize: 20
    },
    radioButton: {
      flexDirection:"row",
      gap: 10,
      alignItems: "center",
      padding: 10
    }
  });
  
export default LanguageModal