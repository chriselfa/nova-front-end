import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Layout = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#021024" />
      <SafeAreaProvider style={styles.safeArea}>
      <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="(home)" options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#021024',
            // height: 100,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        //   href: null,
          title: "Home" }} />
      <Tabs.Screen name="(services)" options={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#021024',
          // height: 100,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
              //   href: null,
              title: "Services" }} />
            
      </Tabs>
      </SafeAreaProvider>
    </>
  )
}

export default Layout


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#021024',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#021024',
    paddingTop: '10%',
  }
});