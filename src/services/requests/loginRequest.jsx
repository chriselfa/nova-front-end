// loginRequest.js

// Importe la bibliothèque axios qui permet de faire des requêtes HTTP (comme GET, POST, etc.)
import axios from 'axios';

// Importe l'URL de l'API pour la connexion depuis un fichier de configuration
import { API_URL_login } from '../apiConfig';

// Définit une fonction asynchrone `loginRequest` qui prend en paramètre un nom d'utilisateur et un mot de passe
export const loginRequest = async (username, password) => {
  try {
    // Envoie une requête POST à l'URL de l'API de connexion avec les données de l'utilisateur
    // console.log(API_URL_login);
    const response = await axios.post(API_URL_login, { 
      username, // Nom d'utilisateur
      password  // Mot de passe
    });

    // console.log(response.data); // Affiche la réponse du serveur dans la console

    // Retourne les données de la réponse du serveur (par exemple, un token d'authentification)
    return response.data;
  } catch (error) {
    // En cas d'erreur (par exemple, une erreur réseau ou une réponse d'erreur du serveur)
    console.error(error); // Affiche l'erreur dans la console
    throw error; // Propage l'erreur pour qu'elle puisse être gérée par le code qui appelle cette fonction
  }
};

// // loginRequest.js

// import axios from 'axios';
// import { API_URL_login } from '../apiConfig';

// export const loginRequest = async (username, password) => {
//   try {
//     const response = await axios.post(API_URL_login, { 
//       username, 
//       password 
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
