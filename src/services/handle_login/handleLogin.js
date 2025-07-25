// src/services/handle_login/handleLogin.ts
import { Alert } from 'react-native';
import { loginRequest } from '../requests/loginRequest';
import { userDataValidationSchema } from '../../../schemas/CompteInfoValidationSchema';
import { openDatabaseAsync, useSQLiteContext } from 'expo-sqlite';
import axios from 'axios';
import { API_URL_login, API_URL_SYNC_TRANSACTIONS } from '../apiConfig';
export default async function handleLogin(values: { username: string; password: string }, authLogin: (userData: UserData) => void) {
  
  const { username, password } = values;
  console.log(username, password);
  console.log(values);

  try {

    //Ici je pense que data doit etre recuperer d'un serveur distant. donc
    //pour le teste, le data sera l'utilisateur enregistre dans la bd (le seul)

    const db = await openDatabaseAsync('novadb')

    // let user
    
    // try{
    //   const users = await db.getAllAsync("SELECT * FROM Users;")
    //   user = users[0]
    // }catch(error){
    //   console.log("Could not call local db as cloud db for simulation" + error)
    // }

    const responseUser = await axios.post(API_URL_login, {
        username, password
    }, {timeout: 5000})


    console.log(responseUser.data.user.rows[0])

    //Here the user is passed. now the database need to be 
    //updated to make the transactions and the user to be synced

    let user = responseUser.data.user.rows[0]

    await db.execAsync(
      `
      DELETE FROM Users;
      `
    );

    await db.execAsync(
      `
      DELETE FROM Transactions;
      `
    );

    const transactions_ = await db.getAllAsync("SELECT * FROM Transactions;")
    console.log(transactions_.length)

    await db.runAsync(
      `
      INSERT INTO Users VALUES(?,?,?,?,?,?);
      `,
      user.id,  // here it should be a typical uuid v4 and more
      user.nom,
      user.email,
      user.telephone,
      user.nomutilisateur,
      user.motdepasse
    );

    console.log("Here")

    //Now get all the transactions from the cloud db and fill in local db
    const responseTransactions = await axios.post(API_URL_SYNC_TRANSACTIONS, {id: user.id}, {timeout: 5000})

    const transactions = responseTransactions.data.transactions.rows

    console.log(responseTransactions.data.transactions.rows)

    for(let transaction of transactions){
      console.log(transaction)
      await db.runAsync(
      `
      INSERT INTO Transactions VALUES(?,?,?,?,?);
      `,
      transaction.id,  // here it should be a typical uuid v4 and more
      transaction.nom,
      transaction.date,
      transaction.prix,
      transaction.type
    ); 
    }

    const data = {id_user: user.id, errors: false}
   
    //J'ai commenter ca pour tester la bd locale //data = await loginRequest(username, password);
    
    console.log(data.id_user);

    console.log('Validation réussie :', data);
    
    if (data && !data.errors) {
       
      /*//C'etait
      /**
       * authLogin({
        username: data.username,
        nom: data.nom,
        email: data.email,
        phone: data.phone,
        id_user: data.id_user
      });
       */
      //Pour la simulation, 

      //Ok here since we are logging in, the databases will cleared once more and replaced by 
      //the cloud database transactions and user from the username and the password entered
      // */
      authLogin({
        username: user.nomUtilisateur,
        nom: user.nom,
        email: user.email,
        phone: user.telephone,
        id_user: user.id
      });

      return { success: true };
    } else {
      throw new Error(data.message || 'Login failed');
    }


    // await fetch(API_URL_login, {
    //   method: "POST",
    //   body: JSON.stringify({username, password}),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }).then((res) => res.json()).then((data_) => {
     
      
    // }).catch((error) => console.log("An error occured " + error))

   
  } catch (error) {
    Alert.alert('Error', error.message);
    return { success: false };
  }
}

// import { Alert } from 'react-native'; 
// import { loginRequest } from '../requests/loginRequest';
// import { userDataValidationSchema } from '../../../schemas/CompteInfoValidationSchema';

// const handleLogin = async (values, login) => {
//   const { username, password } = values;

//   if (!username || !password) {
//     Alert.alert('Erreur', 'Les champs username et password ne doivent pas être vides.');
//     return;
//   }

//   console.log( values);
//   console.log( username, password);
  
//   try {
//     const data = await loginRequest(username, password);

//     // console.log(data.id_user);
//     // Valider response.data 
//     // await userDataValidationSchema.validate(data, { abortEarly: false }); 
//     console.log('Validation réussie :', data);

//     // Condition pour vérifier si les données sont valides avant de naviguer
//     if (data && !data.errors) {
//       login(true); // Appelez login avec `true` après une inscription réussie

//       // navigation.navigate("Apps");
//     } else {
//       console.log('Les données ne sont pas valides');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default handleLogin;
