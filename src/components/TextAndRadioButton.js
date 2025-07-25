
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';


const TextAndRadioButton = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <View style={styles.container}>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ? 
                                'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option1')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        ReactJS
                    </Text>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option2"
                        status={selectedValue === 'option2' ? 
                                 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option2')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        NextJs
                    </Text>
                </View>

                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option3"
                        status={selectedValue === 'option3' ? 
                                'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option3')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        React Native
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default TextAndRadioButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
});



// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// //import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons

//       // import icon from any library
// import RadioButtonRN from 'radio-buttons-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';


// const TextAndRadioButton = () => {

//   const data = [
//     {
//       label: 'data 1'
//      },
//      {
//       label: 'data 2'
//      }
//     ]; 

//   // State to keep track of the selected option
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Function to handle radio button selection
//   const handleSelectOption = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Reset Via SMS Section */}
//       <View style={styles.bel}>
//         <Text style={styles.text}> Reset Via Email </Text>
//         <Icon
//           name="mail-outline"
//           size={30}
//           position={"absolute"}
//           top={31}
//           paddingHorizontal={25}
//           style={styles.icon}
//           icon={
//     <Icon
//       name="check-circle"
//       size={25}
//       color="#2c9dd1"
//     />
//   }
//         />
//         <TouchableOpacity
//           onPress={() => handleSelectOption('sms')}
//           style={[styles.radioButtonContainer, selectedOption === 'sms' && styles.selectedContainer]}
//         >
//           <View style={[styles.radioButton, selectedOption === 'sms' && styles.selectedRadio]} />
//         </TouchableOpacity>
//       </View>


//       {/* Reset Via SMS Section */}
//       <View style={styles.bel}>
//         <Text style={styles.text}>Reset Via SMS</Text>
//         <Icon
//           name="chatbox-outline"
//           size={30}
//           style={styles.icon}
//         />
//         <TouchableOpacity
//           onPress={() => handleSelectOption('sms')}
//           style={[styles.radioButtonContainer, selectedOption === 'sms' && styles.selectedContainer]}
//         >
//           <View style={[styles.radioButton, selectedOption === 'sms' && styles.selectedRadio]} />
//         </TouchableOpacity>
//       </View>

// <RadioButtonRN
//   style={{
//     position: 'absolute',
//     top: 35,
//     paddingHorizontal: 28,}}
//   data={data}
//   selectedBtn={(e) => console.log(e)}
//   icon={
//     <Icon
//       name="check-circle"
//       size={25}
//       color="#2c9dd1"
//     />
//   }
// />
//     </View>
//   );
// };

// export default TextAndRadioButton;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#021024",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bel: {
//     marginTop:30,
//     backgroundColor:"white",
//     borderRadius:20,
//     height:90,
//     //alignSelf:"center", 
//     width:296, 
//     paddingHorizontal:10

//     //justifyContent: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'Semibold',
//     alignSelf: 'center',
//     paddingTop: 30
//   },
//   icon: {
//     position: 'absolute',
//     top: 35,
//     paddingHorizontal: 28,
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 50,
//     position: 'absolute',
//     right: 20,
//   },
//   radioButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     borderWidth: 2,
//     borderColor: 'gray',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedRadio: {
//     backgroundColor: 'blue',
//   },
//   selectedContainer: {
//     borderColor: 'blue',
//   },
// });

