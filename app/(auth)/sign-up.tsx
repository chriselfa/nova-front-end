import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert
} from "react-native";

import { Redirect, useRouter } from "expo-router";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/Ionicons";
import { validationSchemaCompte } from "schemas/CompteInfoValidationSchema";
import handleSignUp from "src/services/handle_login/handleSignup";
import InputText from "src/components/login/InputText";
import InputDate from "src/components/InputDate";
import TextPassword from "src/components/login/TextPassword";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import FormField from "../../src/components/FormField";
import { date } from "yup";
import { useSQLiteContext } from "expo-sqlite";
import uuid from 'react-native-uuid'
import axios from "axios";
import { API_URL_SIGNUP } from "src/services/apiConfig";

const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const db = useSQLiteContext();

  const handleSubmitForm = async (values, { setSubmitting }) => {
    // console.log(values);
    setIsLoading(true);
    try {
      const data = {id_user: true, errors: false}

      //Pour simuler, j'ai commenter ca // await handleSignUp(values, {});
      
      // console.log('Validation réussie :', data);
      // console.log(date);
      // Condition pour vérifier si les données sont valides avant de naviguer
      //  if (data && !data.errors) {

      console.log("Registering the user to local db");

      // console.log(v4({},undefined, 10))

      //To signup, a new id is generated for the user and stored into the local database first
      //Then the id is sent to the cloud db for id syncs

      //There should not be many users so all the users will be cleared before putting the user
      //Here too the transactions are fetched. and all the transactions here will be cleared automatically

      const signIn = async ()=>{
        
      try {
        const id = uuid.v4()

        const response = await axios.post(API_URL_SIGNUP, { 
          id, values
        },{timeout: 5000})

        console.log(response.data)
        
        //This should run on login instead
        
        // await db.execAsync(
        //   `
        //   TRUNCATE TABLE Users;
        //   `
        // );

        // await db.execAsync(
        //   `
        //   TRUNCATE TABLE Transactions;
        //   `
        // );

        // await db.runAsync(
        //   `
        //   INSERT INTO Users VALUES(?,?,?,?,?,?);
        //   `,
        //   id,  // here it should be a typical uuid v4 and more
        //   values.name,
        //   values.email,
        //   values.phone,
        //   values.username,
        //   values.pwd2
        // );

        console.log("Success: a fresh user added :", id)

        //Then look for the transactions to see if there is any transactions for that user already. if yes ? 
        //then load the transactions localy else, leave the transactions empty this means this is a fresh account 

        //Now lets add this user to the cloud db
        // await axios.get("http://192.168.86.224:4000/");

        //The id is passed because its the local db that syncs 
        //the cloud db
      } 
      catch (error) {
        console.log("Une erreur ait survenue lors de votre signup "+error)
        alert("Echec: Verifiez le reseau")
      }
      }
      await signIn()
      if (data.id_user && !data.errors) {
        setIsLoading(false);
        setSubmitting(false);
        console.log("Validation réussie :", data);
        return router.push("(auth)/login"); // Appelez login avec `true` après une inscription réussie

        // return <Redirect href="(auth)/login" />; // Appelez login avec `true` après une inscription réussie
        // navigation.navigate("Apps");
      } else {
        console.log("Les données ne sont pas valides");
        setIsLoading(false);
        setSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setSubmitting(false);
    }
    finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <LinearGradient colors={["#021024", "#052748"]} style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Sign up Nova</Text>
          <Text style={styles.headerSubtitle}>
            Create an Account to continue
          </Text>
        </View>

        <View style={styles.formContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Formik
              initialValues={{
                username: "",
                name: "",
                email: "",
                phone: "",
                pwd: "",
                pwd2: "",
              }}
              validationSchema={validationSchemaCompte}
              onSubmit={handleSubmitForm}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue,
              }) => (
                <View style={styles.formFields}>
                  {/* Form Fields */}

                  <FormField
                    label="Nom"
                    icon="person-outline"
                    component={
                      <InputText
                        keyboardType="default"
                        placeholder="Enter your name"
                        value={values.name}
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        error={errors.name}
                        touched={touched.name}
                      />
                    }
                  />
                  <FormField
                    label="E-mail"
                    icon="person-outline"
                    component={
                      <InputText
                        keyboardType="default"
                        placeholder="Enter votre Email"
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        error={errors.email}
                        touched={touched.email}
                      />
                    }
                  />
                  <FormField
                    label="Téléphone"
                    icon="person-outline"
                    component={
                      <InputText
                        keyboardType="default"
                        placeholder="+237 600000000"
                        value={values.phone}
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        error={errors.phone}
                        touched={touched.phone}
                      />
                    }
                  />
                  <FormField
                    label="Nom d'utilisateur"
                    icon="person-outline"
                    component={
                      <InputText
                        keyboardType="default"
                        placeholder="Enter votre nom d'utilisateur"
                        value={values.username}
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                        error={errors.username}
                        touched={touched.username}
                      />
                    }
                  />
                  <FormField
                    label="Mot de passe"
                    icon="person-outline"
                    component={
                      <InputText
                        keyboardType="default"
                        placeholder="Enter votre mot de passe"
                        value={values.pwd}
                        onChangeText={handleChange("pwd")}
                        onBlur={handleBlur("pwd")}
                        error={errors.pwd}
                        touched={touched.pwd}
                      />
                    }
                  />
                  <FormField
                    label="Confirmer le mot de passe"
                    icon="person-outline"
                    component={
                      <InputText
                        keyboardType="default"
                        placeholder="Confirmer votre mot de passe"
                        value={values.pwd2}
                        onChangeText={handleChange("pwd2")}
                        onBlur={handleBlur("pwd2")}
                        error={errors.pwd2}
                        touched={touched.pwd2}
                      />
                    }
                  />

                  {/* ... Add similar FormField components for other fields ... */}

                  <View style={styles.termsContainer}>
                    <TouchableOpacity
                      onPress={() => setIsChecked(!isChecked)}
                      style={styles.checkbox}
                    >
                      <Icon
                        name={isChecked ? "checkbox-outline" : "square-outline"}
                        size={24}
                        color="#021024"
                      />
                    </TouchableOpacity>
                    <Text style={styles.termsText}>
                      By creating an account, you agree to our terms of service
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.button, !isChecked && styles.buttonDisabled]}
                    onPress={() => handleSubmit()}
                    disabled={!isChecked || isLoading}
                  >
                    {isLoading ? (
                      <ActivityIndicator color="white" />
                    ) : (
                      <Text style={styles.buttonText}>Create an Account</Text>
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </ScrollView>
          <View style={styles.loginLinkContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Link href="login" style={styles.loginLink}>
              <Text style={styles.loginLinkText}>Login</Text>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  formFields: {
    gap: 16,
  },
  button: {
    backgroundColor: "#021024",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
  checkbox: {
    marginRight: 8,
  },
  termsText: {
    flex: 1,
    color: "#666",
    fontSize: 14,
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 24,
  },
  loginText: {
    color: "#666",
    fontSize: 14,
  },
  loginLink: {
    marginLeft: 4,
  },
  loginLinkText: {
    color: "#021024",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default SignUpScreen;
