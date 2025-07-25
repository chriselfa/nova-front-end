import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

// Layout pour l'onglet Accueil
  function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, animation: 'ios_from_right'}} />
      <Stack.Screen name="Send" options={{ headerShown: false, animation: 'ios_from_right' }} />
      <Stack.Screen name="Withdraw" options={{ headerShown: false, animation: 'ios_from_right' }} />
    </Stack>
  );
}

export default HomeLayout;