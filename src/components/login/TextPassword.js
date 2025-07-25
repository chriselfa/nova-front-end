import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TextPassword = ({ value, placeholder, onChangeText, error, touched, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleStatusBar = () => {
    setIsStatusBarVisible(!isStatusBarVisible)
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <View style={{ position: 'relative' }}>
      
      <TextInput 
      placeholderTextColor={"gray"}
        style={{//backgroundColor: "white", 
        color: "black",
        backgroundColor: "aliceblue", fontSize:15, height: 50, 
        borderRadius:50,paddingHorizontal:20}} 
        secureTextEntry={!showPassword}
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
                <TouchableOpacity  
                  onPress={toggleShowPassword} 
                  style={{padding: 5, position: 'absolute', right: 10, top: 5}}
                >
                <Icon 
                 showPassword = 'eye-off'
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={30}
                  color="gray"
                />
      </TouchableOpacity>
      {touched && error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  )
}

export default TextPassword

const styles = StyleSheet.create({
  errorText: {
    position: 'absolute',
    right: 50,
    top: 15,
    color: 'red',
  },
})