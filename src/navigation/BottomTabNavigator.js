import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeScreen from '../screens/app/HomeScreen';
import AnalyticsScreen from '../screens/app/AnalyticsScreen';
import ChatScreen from '../screens/app/ChatScreen';
import GroupeScreen from '../screens/app/GroupeScreen';
import ProfilScreen from '../screens/app/ProfilScreen';
import { SREEN_HEIGHT_1_ON_POURCENT } from '../screens/dimension';



function LogoTi() {
  return (
    <View style={styls.Contenaire}>

    <View style={styls.header}>
      <TouchableOpacity >
        <Icon style={{marginHorizontal:5, color:'black'}} onPress={()=>navigation.navigate("Notification")}
            name={"notifications-outline"}
            size={24}
        />
      </TouchableOpacity>

      <Text  style={{marginHorizontal:5, color:'black'}} >Home</Text>
  
      <TouchableOpacity >
        <Icon style={{marginHorizontal:5, color:'black'}} onPress={()=>navigation.navigate("Notification")}
            name={"notifications-outline"}
            size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Menu")}>
        <Icon  style={{marginHorizontal:5, color:'black'}} 
            name={"menu-outline"}
            size={24}
        />
      </TouchableOpacity>
      </View>
    </View> 
    // <Image
    // style={{ width: 50, height: 50 }}
    // source={require("../assets/images/20240417_061658.jpg")}
    // />
  );
}


const styls = StyleSheet.create({

  Contenaire:{
    // backgroundColor:"red",
    flexDirection:"column",
    flex:1,
    alignItems:"center",
    width:"100%",
    // justifyContent:"flex-end",
    //  paddingVertical: 10,
    // paddingHorizontal:20,
    // backgroundColor: '#C1E8FF',
     backgroundColor: 'red',
  },
 
  header:{
    // backgroundColor:"red",
    flexDirection:"row",
    flex:1,
    alignItems:"center",
    width:"100%",
    // justifyContent:"flex-end",
    // paddingVertical:10,ccccc
    // paddingHorizontal:20,
    // backgroundColor: '#C1E8FF',
     backgroundColor: '#F2F2F2',
  },
 
})



function LogoTitle() {
  return (
    <View style={styles.Contenaire}>

     

    <View style={styles.header}>
        <View style={{ backgroundColor:"#07143F",width:"100%", borderRadius:15,flexDirection:"row",}}>
          <TouchableOpacity >
            <Icon style={{marginHorizontal:5, color:'black'}} onPress={()=>navigation.navigate("Notification")}
                name={"notifications-outline"}
                size={24}
            />
          </TouchableOpacity>
          <View style={{ backgroundColor:"#07143F",width:"70%",flexDirection:"column",}}>
            <Text style={{fontSize:20, color:'white'}}>Hello ,</Text>
            <Text style={[styles.name, {fontSize:20, color:'white'}]}>James Brown</Text>
          </View>
        </View>
      </View> 
    </View> 
    // <Image
    // style={{ width: 50, height: 50 }}
    // source={require("../assets/images/20240417_061658.jpg")}
    // />
  );
}


const styles = StyleSheet.create({

  Contenaire:{
    flex:1,
    // backgroundColor:"red",
    flexDirection:"column",
    alignItems:"center",
    width:"100%",
    // justifyContent:"flex-end",
    //  paddingVertical: 10,
    // paddingHorizontal:20,
    // backgroundColor: '#C1E8FF',
     backgroundColor: 'red',
  },
 
  header:{
    // backgroundColor:"red",
    flexDirection:"row",
    flex:1,
    alignItems:"center",
    width:"100%",
    // justifyContent:"flex-end",
    // paddingVertical:10,ccccc
    // paddingHorizontal:20,
    // backgroundColor: '#C1E8FF',
     backgroundColor: '#F2F2F2',
  },
 
})




const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator 
   style={{flex:1,
    alignItems:"center", 
    justifyContent:"center", }}
   screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } 
        else if (route.name === 'Chat') {
            iconName = focused ? 'people' : 'people-outline';
          }
          else if (route.name === 'Analytics') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          }
          else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Groupe') {
            iconName = focused ? 'person' : 'person-outline';
          }

          
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'gold',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle:{
        position: 'absolute',
         // Ajuste pour un espacement en bas
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        backgroundColor: '#021024', // Couleur de fond 
        elevation: 5, // Ombre pour Android
        // height:"7%",
        height: SREEN_HEIGHT_1_ON_POURCENT,
        paddingVertical:0,
      }
   })}>
    <Tab.Screen name='Home' component={HomeScreen} 
    options={{
      // title: 'Home',
      //  headerStyle: {
      //   backgroundColor: '#ADADAD',
      //  },
      // topBar: { visible: false, },
       headerStyle: {
       backgroundColor: '#ADADeD', 
      },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      headerBackTitle: 'Custom Back',
      headerTitle: (props) => <LogoTitle {...props} /> ,
      // headerRight: (props) => <LogoTi {...props} /> ,
   
    }}
    />
    <Tab.Screen name='Groupe' component={GroupeScreen} />
    <Tab.Screen name='Chat' component={ChatScreen} />
    <Tab.Screen name='Analytics' component={AnalyticsScreen} />
    <Tab.Screen name='Profil' component={ProfilScreen}/>
   </Tab.Navigator>
  )
}
    

export default BottomTabNavigator