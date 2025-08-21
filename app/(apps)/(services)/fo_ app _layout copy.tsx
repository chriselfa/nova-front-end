import { AuthProvider, useAuth } from '@/src/hook/useAuth';
import { Ionicons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
          <AppContent />
      </SafeAreaProvider>
    </AuthProvider>
  );
}


function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#021024" />
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="(auth)/index" /> */}
          <Stack.Screen name="(auth)/validepaiement" />
        </Stack>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#021024" />
      {/* <TabsLayout /> */}

    <AppRootLayouts />
    </SafeAreaView>
  );
}

function AppRootLayouts() {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
    </Stack>
  );
}

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 5,
          // position: 'relative', // Fixe le tab bar en bas
          // bottom: 0,
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
          title: 'Home',
          tabBarIcon: ({ color, size, focused  }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={size} />
            // <Ionicons name="home" size={24} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(auth)"
        options={{
          // title: 'Home',
          href: null,
          tabBarIcon: ({ color, size, focused  }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={size} />
            // <Ionicons name="home" size={24} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}




// function Layout() {
//   const { isAuthenticated } = useAuth();
//  // Si l'utilisateur n'est pas authentifié, redirigez vers la page de connexion
//   if (!isAuthenticated) {
//     // return <Redirect href="/(auth)/login" />;
//     return (
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(auth)" />
//       </Stack>
//     );
//   }
//   // Si l'utilisateur est authentifié, affichez les routes principales
//   return <Slot />;
//   // return (
//   //   <Stack screenOptions={{ headerShown: false }}>
//   //     <Stack.Screen name="(home)" />
//   //   </Stack>
//   //   // <Tabs
//   //   //   screenOptions={{
//   //   //     headerShown: false,
//   //   //     tabBarActiveTintColor: '#3b82f6',
//   //   //     tabBarInactiveTintColor: '#64748b',
//   //   //     tabBarStyle: {
//   //   //       backgroundColor: '#ffffff',
//   //   //       borderTopWidth: 0,
//   //   //       elevation: 5,
//   //   //     },
//   //   //   }}
//   //   // >
//   //   //   <Tabs.Screen
//   //   //     name="index"
//   //   //     options={{
//   //   //       title: 'Accueil',
//   //   //       tabBarIcon: ({ color, size }) => (
//   //   //         <Ionicons name="home" size={size} color={color} />
//   //   //       ),
//   //   //     }}
//   //   //   />
//   //   //   {/* Ajoutez d'autres onglets ici si nécessaire */}
//   //   // </Tabs>
//   // );
// }



// function AppContent() {
//   const { isAuthenticated } = useAuth();
  

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle="light-content" />
//       {!isAuthenticated ? (
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="(auth)" />
//         </Stack>
//       ) : (
//         <Tabs
//           screenOptions={{
//             headerShown: false,
//             tabBarActiveTintColor: '#3b82f6',
//             tabBarInactiveTintColor: '#64748b',
//             tabBarStyle: {
//               backgroundColor: '#ffffff',
//               borderTopWidth: 0,
//               elevation: 5,
//             },
//           }}
//         >
//           <Tabs.Screen
//             name="(home)"
//             options={{
//               title: 'Accueil',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="home" size={size} color={color} />
//               ),
//             }}
//           />
//           {/* <Tabs.Screen
//             name="(Transaction)"
//             options={{
//               title: 'Profil',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="person" size={size} color={color} />
//               ),
//             }}
//           /> */}
//           {/* <Tabs.Screen
//             name="(settings)"
//             options={{
//               title: 'Paramètres',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="settings" size={size} color={color} />
//               ),
//             }}
//           /> */}
//         </Tabs>
//       )}
//     </SafeAreaProvider>
//   );
// }


// // import { Stack, Tabs } from 'expo-router';
// // import { AuthProvider, useAuth } from '../src/hook/useAuth';
// // import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import { StatusBar } from 'react-native';
// // import { View, Text } from 'react-native';

// // export default function RootLayout() {
// //   return (
// //     <AuthProvider>
// //       {/* <Layout /> */}
// //       <AppContent />
// //     </AuthProvider>
// //   );
// // }

// // function AppContent() {
// //   const { isAuthenticated } = useAuth();

// //   return (
// //     <SafeAreaProvider>
// //       <StatusBar barStyle="light-content" />
// //       {!isAuthenticated ? (
// //         <Stack screenOptions={{ headerShown: false }}>
// //           <Stack.Screen name="(auth)" />
// //         </Stack>
// //       ) : (
// //         <Tabs screenOptions={{ headerShown: false }}>
// //           <Tabs.Screen 
// //             name="(home)" 
// //             options={{ title: 'Accueil' }} 
// //           />
// //           <Tabs.Screen 
// //             name="(Transaction)" 
// //             options={{ title: 'Profil' }} 
// //           />
// //           {/* <Tabs.Screen 
// //             name="settings" 
// //             options={{ title: 'Paramètres' }} 
// //           /> */}
// //         </Tabs>
// //       )}
// //     </SafeAreaProvider>
// //   );
// // }


// // // import { Stack, Tabs } from 'expo-router';
// // // import { useAuth, AuthProvider } from '../src/hook/useAuth';
// // // import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// // // import { StatusBar } from 'react-native';

// // // export default function Layout() {
// // function Layout() {
// //   const { isAuthenticated } = useAuth();

// //   if (!isAuthenticated) {
// //     return (
// //       <Stack>
// //         <Stack.Screen name="(auth)" options={{
// //           headerShown: false,
// //         }} />
// //       </Stack>
// //     );
// //   }

// //   return (
// //         <Stack>
// //           <Stack.Screen
// //             name="(app)"
// //             options={{
// //               headerShown: false,
// //             }}
// //           />
// //         </Stack>
// //     // <Tabs screenOptions={{ headerShown: false }}>
// //     //   <Tabs.Screen name="home" />
// //     //   <Tabs.Screen name="profile" />
// //     //   <Tabs.Screen name="settings" />
// //     // </Tabs>
// //   );
// // }
