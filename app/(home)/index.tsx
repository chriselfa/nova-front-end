import QrModal from "src/components/QrModal";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";

import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import ActionComponents from "src/components/ActionComponents";

import {
  SREEN_HEIGHT_0_ON_POURCENT,
  SREEN_HEIGHT_1_ON_POURCENT,
  SREEN_HEIGHT_2_ON_POURCENT,
  SREEN_HEIGHT_3_ON_POURCENT,
  getIconSize,
} from "src/screens/dimension";
import ActionComponentsForDeposit from "src/components/actionComponentsForDeposit";
import { Link, router } from "expo-router";
import { useAuth } from "src/hook/useAuth";
import { ouvrirLaDB, creerLesTables } from "app/db/database";
import AppSQL from "provider/AppSQL";
import { AppSQLContext } from "provider/AppSQL";
import { useSQLiteContext } from "expo-sqlite";

interface TransactionProps {
  id: number;
  name: string;
  date: string;
  prix: number;
  type: string;
}

const HomeScreen = ({}) => {
  const da = new Date();
  const [recentTransaction, setRecentTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const db = useSQLiteContext();

  const handleReadUsers = async () => {
    try {
      const users = await db.getAllAsync(`SELECT * FROM Users;`);
      Alert.alert("Number of users", `${users.length}`);
    } catch (error) {
      Alert.alert("Erreur");
      console.log("An error occured" + error);
    }
  };

  const insertTransactions = async (transaction: TransactionProps) => {
    await db.runAsync(
      "INSERT INTO Transactions VALUES (?, ?, ?, ?, ?)",
      transaction.id,
      transaction.name,
      transaction.date.toLocaleDateString(),
      transaction.prix,
      transaction.type
    );
    return "Success";
  };

  const readAllTransactions = async () => {
    setLoading(true);
    try {
      const data = await db.getAllAsync("SELECT * FROM Transactions;");
      setRecentTransactions(data);
      setLoading(false);
    } catch (error) {
      console.log("Error");
    }
  };

  const dropTransactions = async () => {
    await db.execAsync("DROP TABLE Transactions;");
    readAllTransactions();
  };
  const dropUsers = async () => {
    await db.execAsync("DROP TABLE Users;");
  };

  useEffect(() => {
    readAllTransactions();
    // dropUsers()
    // dropTransactions()
  }, []);

  // const transactionIconRender = ({type})=>{
  //   return (
  //     type == 'depot'
  //   )
  // }

  const renderItems = ({ item }) => {
    return (
      <View style={styles.itemstories}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={item.imageUrl}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.nom}</Text>
            <Text style={{ color: "#ccc", fontWeight: "800" }}>
              {item.date}
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", marginRight: 10 }}>
          {item.type === "depot" ? (
            <Text style={{ color: "green" }}>+${item.prix}</Text>
          ) : (
            <Text style={{ color: "red" }}>-${item.prix}</Text>
          )}
        </View>
      </View>
    );
  };

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  const toggleStatusBar = () => {
    setIsStatusBarVisible(!isStatusBarVisible);
  };
  const { user, logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <QrModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        qrValue={`https://goo.gl/maps/YXxqp5Eupy9eMrEy9?g_st=awb`}
        overlayColor="rgba(0,0,0,0.8)"
        modalBackgroundColor="#07143F"
        titleStyle={{ borderBottomWidth: 1, borderBottomColor: "gold" }}
        titleTextStyle={{ color: "gold" }}
        qrColor="gold"
        qrBackgroundColor="#07143F"
        qrLogo={require("src/assets/icon.png")}
        descriptionTextStyle={{ color: "white" }}
        closeButtonBackgroundColor="gold"
        closeButtonTextColor="#07143F"
        closeButtonBorderRadius={20}
      />

      <View
        style={{
          width: "100%",
          height: "auto",
          flexDirection: "column",
          position: "absolute",
          justifyContent: "center",
          zIndex: 20,
          flex: 1,
        }}
      >
        <View style={styles.Balancecontainer}>
          <View
            style={{
              backgroundColor: "#07143F",
              width: "70%",
              height: 150,
              padding: 10,
              margin: 5,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Hello ,</Text>
            <Text style={styles.name}>{user?.nom || "Guest"}</Text>
            {/* {console.log("sdfv  sd", user?.nom)}
            {console.log("sdfvsd", user)} */}
          </View>
          <View style={styles.Accountbalance}>
            <View
              style={{
                margin: 5,
                marginRight: 10,
              }}
            >
              <ActionComponents
                style={{ fontWeight: "bold" }}
                onPress={() => logout()}
                iconName="log-out-outline"
                size={getIconSize()}
                text={"Logout"}
              />
              <ActionComponents
                style={{ fontWeight: "bold" }}
                onPress={() => setModalVisible(true)}
                iconName="qr-code-outline"
                size={getIconSize()}
                text={"QR Code"}
              />
            </View>
          </View>
        </View>
        <Text
          style={{ marginHorizontal: 15, fontWeight: "bold", fontSize: 18 }}
        >
          RECENT TRANSACTIONS
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        {recentTransaction.length ? (
          <FlatList
            data={recentTransaction}
            keyExtractor={(item) => item.id}
            renderItem={renderItems}
            style={{ height: "40%" }}
            refreshing={loading}
          />
        ) : (
          <Text>Your transactions show here</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: SREEN_HEIGHT_2_ON_POURCENT,
        }}
      >
        <ActionComponentsForDeposit
          onPress={"./Withdraw"}
          iconName="cloud-download-outline"
          size={getIconSize()}
          text={"Withdraw"}
        />
        <ActionComponentsForDeposit
          onPress={"./Send"}
          iconName="paper-plane-outline"
          size={getIconSize()}
          text={"Send"}
        />
        <ActionComponentsForDeposit
          onPress={"./Send"}
          iconName="scan"
          size={getIconSize()}
          text={"Scan QR Code"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Balancecontainer: {
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    borderRadius: 18,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    color: "gold",
  },
  Accountbalance: {
    height: "auto",
    flexDirection: "row",
  },
  itemstories: {
    width: "95%",
    backgroundColor: "white",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 7,
    padding: 5,
  },
});
export default HomeScreen;
