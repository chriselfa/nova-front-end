import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';

const ActionComponents = ({iconName, size, text, onPress, width = '100%', height = '100%', }) => {
  return (
    <View style={styles.parent}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {/* <Link style={styles.button} href={onPress} style={{ width: width, height: height, }}> */}

          <View style={[styles.container,]}>
            <Icon
              name={iconName}
              size={size}
              color="rgba(255, 215, 0, 1)"
            />
          </View>
        {/* </Link> */}
      </TouchableOpacity>  
      <Text style={{ textAlign:"center", }}>{text}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  parent:{
    flex: 1, 
    // backgroundColor : "rgba(7, 20, 63, 0.99)",
    // width: 'auto',
    // height: 'auto',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // margin:5

  },
  container:{
    width: 60,
    height: 60,
    backgroundColor : "rgba(7, 20, 63, 0.99)",
    borderRadius:30,
    borderWidth: 2,
    borderColor: 'rgba(255, 215, 0, 0.70)', 
    justifyContent:"center",
    alignItems:"center",
    elevation:7,
    boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.70)',
  }
});



export default ActionComponents;