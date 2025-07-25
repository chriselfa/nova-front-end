import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/Ionicons";
import InputText from "src/components/login/InputText";
import TextPassword from "src/components/login/TextPassword";
import { Link } from "expo-router";
import { validationSchemaconnexion } from "schemas/CompteInfoValidationSchema";
import handleLogin from "src/services/handle_login/handleLogin";

import { useAuth, AuthProvider } from "src/hook/useAuth"; // Importez le hook useAuth
import { useSQLiteContext } from "expo-sqlite";

const LoginScreen = () => {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  const { login } = useAuth(); // Récupérez la fonction login
  // const auth = useAuth();

  // console.log('Auth context:', auth.login); // Vérifiez ce qui est loggé
  // console.log('Auth context:', login); // Vérifiez ce qui est loggé
  // login(true); // Appelez login avec `true` après une inscription réussie
  const db = useSQLiteContext();

  const getUsers = async () => {
    const user = await db.getAllAsync("SELECT * FROM Users;");
    console.log(user[0].nomUtilisateur, user[0].motDePasse);
  };

  // const test = async () => {
  //   const user = await getUsers();
  // };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#021024" }}>
      <View
        style={{ justifyContent: "center", marginLeft: 20, paddingTop: 30 }}
      >
        <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
          Hi !
        </Text>
      </View>
      <View style={{ height: 60 }}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 25,
            paddingTop: 2,
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          height: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#D9D9D9",
            paddingTop: 50,
            paddingHorizontal: 20,
            height: "100%",
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
          }}
        >
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchemaconnexion}
            onSubmit={(values) => handleLogin(values, login)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 18 }}>Nom d'utilisateur</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                  <InputText
                    placeholder={"Nom d'utilisateur Nova"}
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    error={errors.username}
                    touched={touched.username}
                    keyboardType={undefined}
                  />
                </View>

                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 18 }}>Password</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                  <View>
                    <TextPassword
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={() => handleBlur("password")}
                      placeholder={"Password"}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    // backgroundColor: "coral",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      height: "100%",
                    }}
                  ></View>
                  <Link
                    href="forget-password"
                    style={{
                      // backgroundColor: "coral",
                      width: "40%",
                    }}
                  >
                    <Text
                      style={{
                        // backgroundColor: "oldlace",
                        textAlign: "center",
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </Link>
                </View>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <TouchableOpacity
                    style={styles.log}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={{
                        color: "gold",
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center",
                        paddingTop: 10,
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "coral",
              marginTop: 70,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                // backgroundColor: "oldlace",
                width: "40%",
              }}
            >
              Don't have an account?
            </Text>
            <Link href="/sign-up">
              <Text
                style={{
                  // backgroundColor: "gold",
                  color: "blue",
                  // width:"100%",
                  //color: "gold",
                  paddingLeft: 5,
                }}
              >
                SignUp
              </Text>
            </Link>
          </View>

          <View style={{ width: "100%" }}>
            <Text style={{ textAlign: "center", marginTop: 10 }}>or</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.bel}>
              <View style={{ marginTop: 5, paddingLeft: 60 }}>
                <Icon name="logo-google" size={25} color="#021024" />
              </View>
              <View>
                <Link href="/(home)">
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 5,
                      textAlign: "center",
                      paddingLeft: 10,
                    }}
                  >
                    Login with Google
                  </Text>
                </Link>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#021024",
    height: 50,
    width: "70%",
  },
  bel: {
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
    marginTop: 10,
  },
});

export default LoginScreen;

// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { Formik } from "formik";
// import { Link } from "expo-router";
// import InputText from "src/components/login/InputText";
// import TextPassword from "src/components/login/TextPassword";
// import { validationSchemaconnexion } from "schemas/CompteInfoValidationSchema";
// import handleLogin from "src/services/handle_login/handleLogin";
// import { useAuth } from "src/hook/useAuth";

// const LoginScreen = () => {
//   const { login } = useAuth();

//   return (
//     <View style={{ flex: 1, backgroundColor: "#021024" }}>
//       <View style={{ justifyContent: "center", marginLeft: 20, paddingTop: 30 }}>
//         <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>Hi!</Text>
//         <Text style={{ color: "white", fontSize: 20 }}>Manage your expenses</Text>
//         <Text style={{ color: "white", fontSize: 20 }}>Seamlessly and intuitively</Text>
//       </View>
//       <View style={{ height: 60 }}>
//         <Text style={{ color: "white", fontSize: 30, marginLeft: 25, paddingTop: 2 }}>Login</Text>
//       </View>
//       <View style={{ justifyContent: "center", height: "100%", paddingHorizontal: 20 }}>
//         <View
//           style={{
//             backgroundColor: "#D9D9D9",
//             paddingTop: 50,
//             paddingHorizontal: 20,
//             height: "100%",
//             borderTopRightRadius: 50,
//             borderTopLeftRadius: 50,
//           }}
//         >
//           <Formik
//             initialValues={{ username: "", password: "" }}
//             validationSchema={validationSchemaconnexion}
//             onSubmit={(values) => handleLogin(values, login)}
//           >
//             {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//               <View>
//                 <View style={{ paddingVertical: 5 }}>
//                   <Text style={{ fontSize: 18 }}>Email Address</Text>
//                 </View>
//                 <InputText
//                   placeholder={"email.goldenbillion.com"}
//                   value={values.username}
//                   onChangeText={handleChange("username")}
//                   onBlur={handleBlur("username")}
//                   error={errors.username}
//                   touched={touched.username}
//                 />
//                 <View style={{ paddingVertical: 5 }}>
//                   <Text style={{ fontSize: 18 }}>Password</Text>
//                 </View>
//                 <TextPassword
//                   value={values.password}
//                   onChangeText={handleChange("password")}
//                   onBlur={handleBlur("password")}
//                   placeholder={"Password"}
//                   error={errors.password}
//                   touched={touched.password}
//                 />
//                 <View style={{ alignItems: "center", marginTop: 20 }}>
//                   <TouchableOpacity style={styles.log} onPress={handleSubmit}>
//                     <Text style={{ color: "gold", fontSize: 20, fontWeight: "bold", alignSelf: "center", paddingTop: 10 }}>
//                       Login
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             )}
//           </Formik>
//           <View style={{ flexDirection: "row", marginTop: 70, alignItems: "center", justifyContent: "center", width: "100%" }}>
//             <Text>Don't have an account?</Text>
//             <Link href="/sign-up">
//               <Text style={{ color: "blue", paddingLeft: 5 }}>SignUp</Text>
//             </Link>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   log: {
//     borderRadius: 50,
//     position: "absolute",
//     backgroundColor: "#021024",
//     height: 50,
//     width: "70%",
//   },
// });

// export default LoginScreen;
