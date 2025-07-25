import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';

const ActionComponentsForDeposit = ({iconName, size, text, onPress}) => {
  return (
    <View style={style.parent}>
    
    <Link href={onPress}   asChild >
      <TouchableOpacity 
    // onPress={onPress} 
    style={{
      flex:1,
      alignItems:"center",
    flexDirection:'column',
    justifyContent:"center",
    }}
    >
        <Icon
        style={style.container}
        name={iconName}
        size={size}
        color="gold"
        />
      <Text style={{ textAlign:"center",fontSize: 12 }} >{text}</Text>
     </TouchableOpacity>
     </Link>      
    </View>
  )
}


const style = StyleSheet.create({
  parent:{
    width: '25%',
    height: 70,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    margin:5,
    borderRadius:20,
    borderWidth: 2,
    borderColor: 'rgba(255, 215, 0, 0.70)',
        elevation:7, 
        // boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.70)'
    backgroundColor:'white',
    padding:5,
    overflow: 'hidden'
  },

  container:{   
    margin: 'auto'
  //       elevation:7, 
  //   boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.70)',
    },
    // conainer:{
    //     // color:'gold',
    //     // backgroundColor:"#07143F", 
    //     // backgroundColor : "#021024",
    //     backgroundColor : "#07143F",
    //     width:60,
    //     height:60,
    //     borderRadius:30,
    //     justifyContent:"center",
    //     alignItems:"center",
    //     elevation:7
    // }
})

export default ActionComponentsForDeposit;