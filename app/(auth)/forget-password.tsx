import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  const check = () => {
    setIsChecked(!isChecked);
  }

  return (
    <View style={{ backgroundColor: "#021024" }}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "medium", paddingTop: 60, marginLeft: 20 }}>Forgot password</Text>
      <View style={{ justifyContent: "flex-end", height: '100%' }}>
        <View style={{ backgroundColor: "#D9D9D9", paddingTop: 50, paddingHorizontal: 20, height: '95%', borderTopRightRadius: 50, borderTopLeftRadius: 50, }}>
          <Text style={{ fontSize: 23 }}>Please select option to send link reset password</Text>
          <View style={styles.div}>
            <Text style={{ fontSize: 24, fontWeight: "bold", alignSelf: "center", paddingTop: 30 }}>Reset Via Email </Text>
            <Icon
              name={"mail-outline"}
              size={30}
              position={"absolute"}
              top={31}
              paddingHorizontal={25}
            />
            <TouchableOpacity onPress={check} style={{ paddingLeft: 5 }}>
              <Icon
                name={isChecked ? 'checkbox-outline' : 'square-outline'}
                size={28}
                position={"absolute"}
                right={20}
                bottom={4}
                marginLeft={8}
              />
            </TouchableOpacity>

          </View>
          <View style={styles.bel}>
            <Text style={{ fontSize: 24, fontWeight: "bold", alignSelf: "center", paddingTop: 30 }}>Reset Via Sms</Text>
            <Icon
              name={"chatbox-outline"}
              size={30}
              position={"absolute"}
              top={35}
              paddingHorizontal={28}
            />
            <TouchableOpacity onPress={check} style={{ paddingLeft: 5 }}>
              <Icon
                name={!isChecked ? 'checkbox-outline' : 'square-outline'}
                size={28}
                position={"absolute"}
                right={20}
                bottom={4}
                marginLeft={8}
              />
            </TouchableOpacity>
          </View>

          <View>

            <TouchableOpacity style={styles.btn} onPress={() => { }}>
              <Text style={{ color: "white", fontSize: 20, alignSelf: "center", paddingTop: 10 }}>Select option</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>

  )
}

export default PasswordScreen

const styles = StyleSheet.create({
  div: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height: 90,
    alignSelf: "center",
    width: 296,
    paddingHorizontal: 10

  },
  bel: {
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 20,
    height: 90,
    alignSelf: "center",
    width: 296,
    paddingHorizontal: 10
  },
  btn: {
    borderRadius: 50,
    position: "absolute",
    backgroundColor: '#021024',
    height: 50,
    width: 320,
    marginTop: 60
  },

})