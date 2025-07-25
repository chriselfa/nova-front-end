import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const CodeVerificationScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#021024", flex:1}}>
      <Text style={{color:"white", fontSize:30, fontWeight:"medium",marginLeft:20, paddingTop:60}}>Phone Verification</Text>
    <View style={{justifyContent: "flex-end",height: '100%'}}>
      <View style={{backgroundColor:"#D9D9D9", paddingTop:50, paddingHorizontal: 20, height: '95%', borderTopRightRadius: 50, borderTopLeftRadius: 50,}}>
        <View>
        <Icon
            name ={'checkmark-circle-outline'}
            size={187}
            position={"absolute"}
            paddingHorizontal={60}
            top={10}
            />
           
            </View>
            <Text style={{fontSize:23,paddingVertical:200,alignSelf:"center"}}>Congratulations</Text>
            <View>
            <Text style={{fontSize:20,position:"absolute",bottom:150,width:339}}>You've been successfully registered</Text>
            </View>
            <View>
            <TouchableOpacity>
            <View style={{alignItems:"center",marginTop:20}}>
            <TouchableOpacity style={styles.log} onPress={()=> navigation.navigate('Apps')}>
            {/* <TouchableOpacity style={styles.log} onPress={()=> navigation.navigate('Login')}> */}
            {/* <TouchableOpacity style={styles.log} onPress={()=> navigation.navigate("BottomTab")}> */}
                <Text style={{color:"white",fontSize:20,alignSelf:"center",paddingTop:10}}>Continue</Text>
            </TouchableOpacity>
              </View>
              </TouchableOpacity>
            </View>
           </View>
          </View>
        </View>
            
            
           
  )
}

export default CodeVerificationScreen

const styles = StyleSheet.create({
  log:{
  
      borderRadius:50,
      
      backgroundColor:'#021024',
      height:50,
      width:330, 
  }

  
})