import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AppContent() {
  //J'ai commenter le code si pour afficher la page et passer l'autentification

  // const { isAuthenticated, isLoading } = useAuth();

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <StatusBar barStyle="light-content" backgroundColor="#021024" />
  //       <Stack screenOptions={{ headerShown: false }}>
  //         <Stack.Screen name="(services)" />
  //       </Stack>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#021024" />
      <TabsLayout />
    </SafeAreaView>
  );
}

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#64748b",
        tabBarStyle: {
          backgroundColor: "#021024",
          borderTopWidth: 0,
          elevation: 5,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          position: "relative", // Fixe le tab bar en bas
          bottom: 0,
          // left: 0,
          // right: 0,
          // zIndex: 1, // S'assure que le tab bar reste au-dessus du contenu
        },
        // tabBarHideOnKeyboard: true, // Optionnel: cache le tab bar quand le clavier est ouvert
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarActiveTintColor: "gold",
          tabBarInactiveTintColor: "white",
          // tabBarStyle: {
          //   backgroundColor
          // }
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={focused ? "gold" : "white"}
              size={size}
            />
            // <Ionicons name="home" size={24} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(auth)"
        options={{
          // title: 'Home',
          href: null,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={size}
            />
            // <Ionicons name="home" size={24} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(services)"
        options={{
          tabBarActiveTintColor: "gold",
          tabBarInactiveTintColor: "white",
          title: "Services",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "server-sharp" : "server-outline"}
              color={focused ? "gold" : "white"}
              size={size}
            />
            // <Ionicons name="home" size={24} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AppStuffs/AppContent"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
