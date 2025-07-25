import {  View, Text, Image, TouchableOpacity, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native'
import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionComponents from '../../components/ActionComponents';
// import { ActionComponentsForDeposit} from '../../components/actionComponentsForDeposit';
import ContainerService from '../appServices/ContainerService';
import { SREEN_HEIGHT_0_ON_POURCENT, SREEN_HEIGHT_1_ON_POURCENT, SREEN_HEIGHT_2_ON_POURCENT,
   SREEN_HEIGHT_3_ON_POURCENT, getIconSize } from '../dimension';
import ActionComponentsForDeposit from '../../components/actionComponentsForDeposit';



const HomeScreen = ({navigation}) => {
  const da = new Date ();
  // console.log(getIconSize());
  const items = [
  // liste des services de notre applliations elle doit etres variable fonction des activier de l'utilisateur
    <ActionComponents onPress={()=>navigation.navigate("MoreDetails")} iconName="storefront-outline" size={getIconSize()} text={"Store M"}/>, 
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" size={getIconSize()} text={"My Saving"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Withdraw")} iconName="people-outline" size={getIconSize()} text={"Njangi"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Deposit")} iconName="cloud-upload-outline" size={getIconSize()} text={"Tax"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Deposit")} iconName="cloud-upload-outline" size={getIconSize()} text={"Reeive"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" size={getIconSize()} text={"Borrow"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" size={getIconSize()} text={"Buy"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" size={getIconSize()} text={"Swap"}/>,
  ]; // Remplacez par vos éléments réels
  const recentTransaction = [
    {
      id:1,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Sam",
      date:new Date(Date.now()),
      prix:5000,
      type:'depot',
    },
    {
      id:2,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Julia",
      date:new Date(Date.now()),
      prix:4000,
      type:'depot',
    },
    {
      id:3,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Mia",
      date:new Date(Date.now()),
      prix:2000,
      type:'retrait',
    },
    {
      id:4,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Belviane",
      date:new Date(Date.now()),
      prix:5000,
      type:'depot',
    },
    {
      id:5,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Samanta",
      date:new Date(Date.now()),
      prix:4000,
      type:'depot',
    },
    {
      id:6,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Mia",
      date:new Date(Date.now()),
      prix:2000,
      type:'retrait',
    },
    {
      id:7,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Nabila",
      date:new Date(Date.now()),
      prix:2000,
      type:'retrait',
    }
  ]
  const renderItems =({item})=>{
    return(
      <View style={styles.itemstories}>
        <View style={{flexDirection:'row'}}>
        <Image
            source={item.imageUrl}
            style={{height:50, width:50, borderRadius:25}}
          />
          <View style={{marginHorizontal:10}}>
       
            <Text style={{fontWeight:'bold', fontSize:15}}>{item.name}</Text>
            <Text style={{color:"#ccc", fontWeight:'800'}}>{item.date.toLocaleDateString()}</Text>
          </View>
        </View>
        <View style={{justifyContent:'center', marginRight:10}}>
          {item.type === "depot"? (<Text style={{color:'green'}}>+${item.prix}</Text>):(<Text style={{color:'red'}}>-${item.prix}</Text>)}
        
        </View> 
        </View>
    )
  }

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
const toggleStatusBar = () => {
  setIsStatusBarVisible(!isStatusBarVisible)
}
  return (
    <View style = {styles.container} >
      {/* <StatusBar hidden={false}/> */}
      
      {/* second view */}
      <View style={{
        // backgroundColor:"#5405B3", 
        height:SREEN_HEIGHT_0_ON_POURCENT,}}>
          {/* <ContainerService items={items} style={styles.item }/> */}
      </View>
      <View style={{
        // backgroundColor:"#5480B3", 
        height:SREEN_HEIGHT_3_ON_POURCENT,}}>
        {/* <ContainerService items={items} style={styles.item }/> */}
      </View>
      <View style={styles.Balancecontainer}>
        <View style={{ 
          backgroundColor:"#07143F",
          width:"75%", padding:10, margin:5,borderRadius:15,}}>
          <Text style={{fontSize:20, color:'white'}}>Hello ,</Text>
          <Text style={styles.name}>James Brown</Text>
        </View>
        <View style={styles.Accountbalance}>
            {/* <Text style={{color:"white",fontSize:11}}>Account Balance</Text> */}
            {/* <Text style={{color:"white",fontWeight:"bold",fontSize:18,marginTop:10}}>$200.000.00</Text> */}
            <View>
            <ActionComponents style={{fontWeight:'bold'}} onPress={()=>navigation.navigate("Deposit")} iconName="planet" size={getIconSize()} text={"Account"}/>
            </View>
          </View>
      </View>
      <View style={{ flex:3,}}>
        <Text style={{marginHorizontal:15,marginTop:5,fontWeight:"bold",fontSize:18}}>RECENT TRANSACTIONS</Text>
        <FlatList
      
          data={recentTransaction}
          keyExtractor={item =>item.id}
          renderItem={renderItems}
          style={{height:"40%"}}

        />
      </View>
      <View style={{
        // backgroundColor:"#5480B3",
         flexDirection:"row", alignItems:"center", justifyContent:'space-evenly', height:SREEN_HEIGHT_2_ON_POURCENT,}}>
        <ActionComponentsForDeposit onPress={()=>navigation.navigate("Deposit")} iconName="cloud-upload-outline" size={getIconSize()} text={"Deposit"}/>
        <ActionComponentsForDeposit onPress={()=>navigation.navigate("Withdraw")} iconName="cloud-download-outline" size={getIconSize()} text={"Withdraw"}/>
        <ActionComponentsForDeposit onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" size={getIconSize()} text={"Send"}/>
        
      </View>
      <View style={{flex: 2, alignItems:"center", marginHorizontal:10,/* backgroundColor: "#021034", */ }}>
      {/* menu de navigation des ervices de notre application */}
              <ContainerService items={items}  style={styles.item }/> 
              {/* {console.log(navigation)}  */}
            </View>
     
    </View>
  )
  // container
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 0,
    // backgroundColor:"#ADADAD", #C1E8FF
    backgroundColor:"white", 
    // marginBottom:'10%', 
    paddingBottom: SREEN_HEIGHT_1_ON_POURCENT,  
    // backgroundColor:"#5483B3", 
  },
  header:{
    // backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingVertical:10,
    paddingHorizontal:20
  },
  Balancecontainer:{
    //  backgroundColor:"green",
    // marginTop:0,
    // marginHorizontal:0,
    flexDirection:'row',
    // justifyContent:"center",
    // alignItems:"center",
    flex:1,
    ///// height:100,
    // marginVertical:0,
    // paddingHorizontal:5,
    borderRadius:18,
    // elevation:7,
  },
  name:{
    fontWeight:"bold",
    fontSize:25,
    color:'gold'
  },
  Accountbalance:{
    // backgroundColor:"#021024",
    // borderRadius:18,
    height:100,
    marginVertical:5,
    flexDirection:'row',
    // elevation:10,
    padding:5,
    alignItems:"center",
    // width:"20%",
    // alignSelf:"center",
  },
  itemstories:{
    // height:100,
    width:"90%",
    // marginVertical:10,
    // alignItems:"center"
    backgroundColor:'white',
    marginVertical:10,
    alignSelf:'center',
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:7,
    padding:5
  },
  // Icons:{
  //   flexDirection:"row",
  //   justifyContent:"space-between"
  // }

   
})
export default HomeScreen