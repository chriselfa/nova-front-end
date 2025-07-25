import { Alert } from 'react-native'; 
import { loginRequest } from '../requests/loginRequest';
import axios from 'axios';
import { API_URL_PAIEMENT } from '../apiConfig';
import { userDataValidationSchema } from '../../../schemas/CompteInfoValidationSchema';

const handleSendMoney = async (values, login) => {
  const { phone, montant, id } = values;

  if (!phone || !montant) {
    Alert.alert('Erreur', 'Les champs username et password ne doivent pas être vides.');
    return;
  }

  // console.log( values);
  // console.log( phone, montant, id);
  
  try {
    console.log('Valeurs envoyées :', values.id_user, values.montant, values.phone);
    console.log(
      `Valeurs envoyées : ${values.id_user}, ${values.montant}, ${values.phone}`
    );
    // Les valeurs sont automatiquement converties en string 
    const response = await axios.post(API_URL_PAIEMENT, { 
        id_user : values.id_user,
        montant : values.montant,
        phone: values.phone,
    });
    // const data = await loginRequest(phone, montant, id);

    // console.log(data.id_user);
    // Valider response.data 
    // await userDataValidationSchema.validate(data, { abortEarly: false }); 
    console.log('Validation réussie :', response.data.message);
    data = response.data; // Assurez-vous que `data` est défini ici
    // Condition pour vérifier si les données sont valides avant de naviguer
    if (data && !data.errors) {
      return { success: true, message: data.message };

      // navigation.navigate("Apps");
    } else {
      console.log('Les données ne sont pas valides');
    }
  } catch (error) {
    console.error(error);
  }
};

export default handleSendMoney;
