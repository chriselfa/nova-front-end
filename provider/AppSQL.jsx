import { SQLiteProvider } from "expo-sqlite";
import { createContext } from "react";

export const AppSQLContext = createContext();

export default function AppSQL({ children }) {
  //value={{ user, transactions }}
  return (
    <AppSQLContext.Provider value={{ yo: 1 }}>
      <SQLiteProvider
        databaseName="novadb"
        onInit={async (db) => {
          await db.execAsync("PRAGMA journal_mode = WAL");
          await db.execAsync(`
            CREATE TABLE IF NOT EXISTS User (
              id TEXT PRIMARY KEY,
              nom VARCHAR(225) NOT NULL,
              email VARCHAR(225) NOT NULL,
              telephone INTEGER NOT NULL,
              nomUtilisateur VARCHAR(225) NOT NULL,
              motDePasse VARCHAR(255) NOT NULL
            );
          `);
        }}
        options={{ useNewConnection: false }}
      >
        {children}
      </SQLiteProvider>
    </AppSQLContext.Provider>
  );
}
