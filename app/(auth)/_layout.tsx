import { Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { View, ActivityIndicator } from 'react-native';

function HomeLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      animation: 'fade', // Animation douce entre les écrans
    }}>
      {/* Écran principal */}
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Accueil',
          // Optionnel: icône pour la tab bar si utilisé avec Tabs
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />

      {/* Authentification */}
      <Stack.Screen 
        name="login" 
        options={{ 
          title: 'Connexion',
          // Animation spécifique pour le login
          animation: 'slide_from_right',
        }} 
      />
      
      <Stack.Screen 
        name="sign-up" 
        options={{ 
          title: 'Inscription',
          presentation: 'modal', // Ou 'card' selon le style souhaité
        }} 
      />

      <Stack.Screen 
        name="forget-password" 
        options={{ 
          title: 'Mot de passe oublié',
          animation: 'slide_from_bottom',
        }} 
      />

    </Stack>
  );
}

export default HomeLayout;