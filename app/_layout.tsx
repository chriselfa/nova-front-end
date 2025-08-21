import { AuthProvider } from "@/src/hook/useAuth";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SQLiteProvider
      databaseName="novadb"
      onInit={async (db) => {
        await db.execAsync("PRAGMA journal_mode = WAL");
        await db.execAsync(`
          CREATE TABLE IF NOT EXISTS Users(
            id TEXT PRIMARY KEY,
            nom VARCHAR(225) NOT NULL,
            email VARCHAR(225) NOT NULL,
            telephone INTEGER NOT NULL,
            nomUtilisateur VARCHAR(225) NOT NULL,
            motDePasse VARCHAR(255) NOT NULL
          );
        `);
        
        await db.execAsync(`
          CREATE TABLE IF NOT EXISTS Transactions(
            id INTEGER AUTO INCREMENT PRIMARY KEY,
            nom VARCHAR(225) NOT NULL,
            date VARCHAR(255) NOT NULL,
            prix INTEGER NOT NULL,
            type VARCHAR(225) NOT NULL
          );
        `)

      }}
      options={{ useNewConnection: true }}
    >
   <StatusBar style="light" backgroundColor="#021024" /> 

      <AuthProvider>
        <SafeAreaProvider style={styles.safeArea}>
          {/* <AppContent /> */}
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(auth)" options={{ 
              headerShown: false
            //   href: null,
            }} />
            <Stack.Screen name="(apps)" options={{
              headerShown: false
            //   href: null,
             }} />
            <Stack.Screen name="AppStuffs/AppContent" options={{
              headerShown: false 
            //   href: null,
               }} />
            <Stack.Screen name="db/utilities" options={{ 
            headerShown: false
            //   href: null,
               }} />
          </Stack>
        </SafeAreaProvider>
      </AuthProvider>
    </SQLiteProvider>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#021024',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#021024',
    paddingTop: 10,
  }
});