import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

// Layout pour l'onglet Accueil
  function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, }} />
      <Stack.Screen name="fo_ app _layout copy" options={{ headerShown: false, }} />
    </Stack>
  );
}

export default HomeLayout;