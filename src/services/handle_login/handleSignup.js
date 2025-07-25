import axios from 'axios';
import { Alert } from 'react-native'; 
import { PersonneSchema } from 'schemas/personneSchema';
import {API_URL_SIGNUP} from '../apiConfig';

const handleSignUp = async (values, navigation) => {
  // console.log(values)
  const { 
    username,
    name,
    email,
    phone,
    pwd,
    // name,
    // surname,
    // sexe,
    // idcarte,
    // date_of_berth,
    // height,
    // weight,
    // signature
  } = values;
  console.log(username, name, email, phone, pwd);
  if (!name || !username || !name || !email || !phone || !pwd) {
    Alert.alert('Erreur', 'Les champs ne doivent pas être vides.');
    return;
  }

  try {
    console.log(API_URL_SIGNUP);
    const response = await axios.post(API_URL_SIGNUP, { 
      username : username,
      nom : name,
      email : email,
      phone : phone,
      password : pwd,
      pincode: 0
    });

    // Valider response.data 
    // await PersonneSchema.validate(response.data, { abortEarly: false }); 
    // console.log('Validation réussie :', response.data);

    // Condition pour vérifier si les données sont valides avant de naviguer
    if (response.data && !response.data.errors) {
      // navigation.navigate("Login");
      return response.data;
    } else {
      console.log('Les données ne sont pas valides');
    }
  } catch (error) {
    console.error(error);
  }
};

export default handleSignUp;
