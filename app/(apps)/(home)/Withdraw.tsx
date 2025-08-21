import { validationSchemaTransfert } from '@/schemas/CompteInfoValidationSchema';
import InputText from '@/src/components/login/InputText';
import { useAuth } from '@/src/hook/useAuth';
import { API_URL_NEW_TRANSACTION } from '@/src/services/apiConfig';
import axios from 'axios';
import { router } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuid } from 'uuid';


const Send = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const { user } = useAuth();
  const db = useSQLiteContext()

  const handleSubmit = async (values) => {
    // console.log(values, user);
    setTransactionDetails({
      id_user: user?.id_user,
      montant: values.montant,
      phone: values.phone,
      frais: Math.round(values.montant * 0.02),
      total: Math.round(values.montant * 1.02)
    });
    setShowConfirmation(true);
  };

  const confirmTransaction = async () => {
    setIsLoading(true);
    try {
      const cleanedValues = {
        ...transactionDetails,
        phone: String(transactionDetails.phone).replace(/\D/g, ''),
        montant: Number(transactionDetails.montant)
      };
      // console.log(cleanedValues);
      
      const result = {success: true, message: "Terminee"}
      //const result =  await handleSendMoney(cleanedValues);

       try{
        const id = uuid.v4() //This is the transaction id

        //Now get the user id from the local Database
        const userId = await (await db.getAllAsync("SELECT * FROM Users;")).at(0).id
        console.log(`Adding a transaction for user : ${userId}`)

        const values = {
          name: `ID: ${id.slice(0, 20)}...`,
          date: new Date(Date.now()).toLocaleDateString(),
          price: cleanedValues.total,
          type: 'retrait',
          userId: userId
        }

        console.log(id)

        //Now with the user id, add a new transaction to the cloud database 
        await axios.post(API_URL_NEW_TRANSACTION, { 
          id, values
        })

        await db.runAsync("INSERT INTO Transactions VALUES(?,?,?,?,?)",
          id,
          values.name,
          values.date,
          values.price,
          values.type
        )

        console.log('Added new transaction: send')

      }catch(error){
        console.log("Erreur l'ors de l'enregistrement de la transaction"+ error)
      }
      /*
      try{
        const id = uuid.v4() //This is the transaction id

        //Now get the user id from the local Database
        const userId = await (await db.getAllAsync("SELECT * FROM Users;")).at(0)
        console.log(`Adding a transaction for user : ${userId}`)

        const values = {
          name: `ID: ${id.slice(0, 20)}...`,
          date: new Date(Date.now()).toLocaleDateString(),
          price: cleanedValues.total,
          type: 'retrait',
          userId: userId
        }

        //Now with the user id, add a new transaction to the cloud database 
        await axios.post(API_URL_NEW_TRANSACTION, { 
          id, values
        })

        await db.runAsync("INSERT INTO Transactions VALUES(?,?,?,?,?)",
          id,
          values.name,
          values.date,
          values.price,
          values.type
        )

        console.log('Added new transaction')

      }catch(error){
        console.log("Erreur l'ors de l'enregistrement de la transaction"+error)
      }*/

      
      if (result.success) {
        Alert.alert('Succès', 'Transaction effectuée avec succès');
        setShowConfirmation(false);
        router.push('(home)');
      } else {
        Alert.alert('Erreur', result.message || 'Échec de la transaction');
      }
    } catch (error) {
      Alert.alert('Erreur', error.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#021024" }}>
      <View style={{ justifyContent: "center", marginLeft: 20, paddingTop: 30 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Mek Transaction</Text>
      </View>
      <View style={{ height: 60 }}>
        <Text style={{ color: 'white', fontSize: 30, marginLeft: 25, paddingTop: 2 }}> Nova</Text>
      </View>

      <View style={{ 
        backgroundColor: "#D9D9D9",  
        paddingTop: 50, 
        marginHorizontal: 20, 
        paddingHorizontal: 20, 
        height: '100%', 
        borderTopRightRadius: 50, 
        borderTopLeftRadius: 50 
      }}>
        {!showConfirmation ? (
          <Formik
            initialValues={{ montant: '', phone: '', id: 1 }}
            validationSchema={validationSchemaTransfert}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 18 }}>Montant</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                  <InputText
                    placeholder={"00000"}
                    value={values.montant}
                    onChangeText={handleChange('montant')}
                    onBlur={handleBlur('montant')}
                    error={errors.montant}
                    touched={touched.montant} 
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 18 }}>Phone</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                  <InputText
                    placeholder={"6 00 00 00 00"}
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    error={errors.phone}
                    touched={touched.phone} 
                    keyboardType="phone-pad"
                  />
                </View>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <TouchableOpacity style={styles.log} onPress={handleSubmit}>
                    <Text style={{ color: "gold", fontSize: 20, fontWeight: "bold", alignSelf: "center", paddingTop: 10 }}>
                      Continuer
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        ) : (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
              Confirmez la transaction
            </Text>
            
            <View style={{ backgroundColor: '#F0F0F0', borderRadius: 15, padding: 20, marginBottom: 30 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <Text style={{ fontSize: 16 }}>Destinataire:</Text>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{transactionDetails.phone}</Text>
                {/* <Text style={{ fontSize: 16, fontWeight: '500' }}>{transactionDetails.phone}</Text> */}
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <Text style={{ fontSize: 16 }}>Montant:</Text>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{transactionDetails.montant} XAF</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <Text style={{ fontSize: 16 }}>Frais:</Text>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{transactionDetails.frais} XAF</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <Text style={{ fontSize: 16 }}>Total:</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{transactionDetails.total} XAF</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  }}>
              <TouchableOpacity 
                style={[styles.log, { width: '45%', backgroundColor: '#A0A0A0' }]} 
                onPress={() => setShowConfirmation(false)}
              >
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", alignSelf: "center", paddingTop: 10 }}>
                  Retour
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.log2, { width: '45%' }]} 
                onPress={confirmTransaction}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="gold" size="small" />
                ) : (
                  <Text style={{ color: "gold", fontSize: 18, fontWeight: "bold", alignSelf: "center", paddingTop: 10 }}>
                    Confirmer
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    borderRadius: 50,
    position: "absolute",
    backgroundColor: '#021024',
    height: 50,
    width: "70%",
  },
  log2: {
    borderRadius: 50,
    position: "absolute",
    right: 0,
    backgroundColor: '#021024',
    height: 50,
    width: "70%",
  },
  bel: {
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
    marginTop: 10,
  },
});

export default Send;

