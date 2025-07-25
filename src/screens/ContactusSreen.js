import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const ContactusSreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"#D9D9D9"}}>
      {/* backward arrow */}
      <View style={{paddingVertical:20}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Menu")}>
          <Icon
           name={"arrow-back-outline"}
           size={25}
           
           paddingHorizontal={10}
           marginTop={20}
          />
          </TouchableOpacity>
      </View>
      {/* contact us if needs be */}
      <View style={{paddingVertical:5}}>
      <Text style={styles.txt}>Contact us</Text>
      </View>
      {/* personnel you can contact */}
      <View style={{paddingVertical:15}}/>
      <TouchableOpacity>
      <View style={styles.div}>
        <Icon
         name={"chatbubble-ellipses-outline"}
         size={30}
         marginHorizontal={20}
         marginTop={10}
        />
        <Text style={{fontSize:20,marginHorizontal:70,position:"absolute",marginTop:10}}>contact an agent</Text>
        <TouchableOpacity>
        <Icon
        name={"chevron-forward-outline"}
        size={20}
        position={"absolute"}
        left={280}
        bottom={6}
        />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
      {/* contact client service */}
      <View style={{paddingVertical:20}}/>
      <TouchableOpacity>
      <View style={styles.div}>
        <Icon
         name={"headset-outline"}
         size={30}
         marginHorizontal={20}
         marginTop={10}
        />
        <Text style={{fontSize:20,marginHorizontal:70,position:"absolute",marginTop:10}}>client service</Text>
        <TouchableOpacity>
        <Icon
        name={"chevron-forward-outline"}
        size={20}
        position={"absolute"}
        left={280}
        bottom={6}
        />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
      {/* our locaction */}
      <View style={{paddingVertical:20}}/>
      <TouchableOpacity>
      <View style={styles.div}>
        <Icon
         name={"location-outline"}
         size={30}
         marginHorizontal={20}
         marginTop={10}
        />
        <Text style={{fontSize:20,marginHorizontal:70,position:"absolute",marginTop:10}}>where to find us</Text>
        <TouchableOpacity>
        <Icon
        name={"chevron-forward-outline"}
        size={20}
        position={"absolute"}
        left={280}
        bottom={6}
        />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
    </View>
  )
}
export const styles = StyleSheet.create({
  txt:{
    fontSize:30,
    fontWeight:"bold",
    paddingHorizontal:20,
  },
  div:{
    backgroundColor:"white",
    borderRadius:20,
    height:54,
    width:323,
    marginHorizontal:18,
    marginTop:25
  }
});
export default ContactusSreen