import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatScreen = ({navigation}) => {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  const toggleStatusBar = () => {
    setIsStatusBarVisible(!isStatusBarVisible)
  }
  return (
      <View style = {styles.container} >
    {/* <StatusBar hidden={false}/> */}
  


  
  </View>
)
}
const styles = StyleSheet.create({
  container:{
    paddingTop: 0,
    backgroundColor:"#ADADAD", 
    // backgroundColor:"#5483B3", 
  },
  header:{
  //   backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingVertical:10,
    paddingHorizontal:20
  },
}
)

export default ChatScreen