import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const WelcomePage = () => {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  const toggleStatusBar = () => {
    setIsStatusBarVisible(!isStatusBarVisible)
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#021024", justifyContent: 'center', alignItems: "center" }}>

      <View>
        <Text style={{ color: "white", fontSize: 40, }}>Welcome to</Text>
        <Text style={{ fontWeight: 200, fontSize: 50, color: "gold" }}>Nova</Text>
        <Text style={{ color: "#C1E8FF", fontWeight: 300, fontSize: 22 }}>Join Anywhere Anytime.</Text>
      </View>

      <Link style={styles.button} href={'/login'}  >

        <Text style={{
          color: "white",
          alignItems: 'center', justifyContent: "center", textAlign: "center",
        }}>Get Started</Text>

      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-end',


  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "#5483B3",
    position: "absolute",
    bottom: 100,
    width: "50%",


  }
});

export default WelcomePage

// // app/paymentResult.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';

// // export default 
// function PaymentResultScreen() {
//   const paymentUrl = 'https://pay.notchpay.co/test.r7QjkB3zIKZE0oaiezWTpHQJeDbn1K41rXdt3yni88upjW9TIBq6fwjCpbllu6U4yNxa733RMQiSxmb4lbLNdFxBhIkAoFAgBgNsVSewHBmyH57NkecgeFM0dtkjJgTr';

//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{ uri: paymentUrl }}
//         style={styles.webview}
//         startInLoadingState={true}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webview: {
//     flex: 1,
//   },
// });