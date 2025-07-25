import { Stack, Tabs, Slot, Redirect } from "expo-router";
import { AuthProvider, useAuth } from "../src/hook/useAuth";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, View, ActivityIndicator } from "react-native";
import AppSQL from "../provider/AppSQL";
import { SQLiteProvider } from "expo-sqlite";
import { createContext } from "react";
import AppContent from "./AppStuffs/AppContent";

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
      <AuthProvider>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </AuthProvider>
    </SQLiteProvider>
  );
}
