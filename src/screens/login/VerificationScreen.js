import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const VerificationScreen = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:"#021024"}}>
      <View style={{justifyContent:"center",marginLeft:20,paddingTop:60}}>
      <Text style={{color: "white", fontSize: 30, fontWeight:'medium'}} >Verification</Text>
      </View>
    <View style={{justifyContent: "flex-end",height: '100%'}}>
       <View style={{backgroundColor:"#D9D9D9", paddingTop:50, paddingHorizontal: 20, height: '97%', borderTopRightRadius: 50, borderTopLeftRadius: 50,}}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize:25}}>Enter Recovery Code</Text>
          <Text style={{fontSize:20,paddingTop: 10}}>We have sent a one time Verification Code to your Email</Text>
        </View>
        <View style={styles.red}>
           <TextInput style={styles.div} maxLength={1} keyboardType='numeric'/>
           <TextInput style={styles.div} maxLength={1} keyboardType='numeric'/>
           <TextInput style={styles.div} maxLength={1} keyboardType='numeric'/>
           <TextInput style={styles.div} maxLength={1} keyboardType='numeric'/>
        </View>
        <View>
          <Text style={{paddingTop:20}}>This codes expires in 1 min</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('CodeVerification')}>
            <Text style={styles.txt}>Verify</Text>
          </TouchableOpacity>
        </View>
       </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div:{
    backgroundColor: "white", 
    height: 60, 
    borderRadius:10,
    paddingHorizontal:25,
    width:60,
    marginTop: 20
  },
  red:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  btn:{
    borderRadius:50,
    position:"absolute",
    backgroundColor:'#021024',
    height:50,
    width:330,
    marginTop:60
  },
  txt:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    alignSelf:"center",
    paddingTop:10
  }
})

export default VerificationScreen

