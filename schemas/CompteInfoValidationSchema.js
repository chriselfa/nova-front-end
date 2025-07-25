import * as yup from 'yup';

// Schéma de validation des données de connexion: information de connexion
export const validationSchemaconnexion = yup.object().shape({
  username: yup.string().required('UserName est requis'),
  password: yup.string().required('Password est requis'),
});
// Schéma de validation des données de transfert: information de de transfert
// export const validationSchematransfert = yup.object().shape({
//   montant: yup.string().required('montant est requis'),
//   phone: yup.string().required('phone est requis'),
// });

export const validationSchemaTransfert = yup.object().shape({
  montant: yup
    .number()
    .typeError('Le montant doit être un nombre')
    .required('Le montant est requis')
    .moreThan(1000, 'Le montant doit être supérieur à 1000')
    .integer('Le montant doit être un entier'),

  phone: yup
    .string()
    .required('Le numéro de téléphone est requis')
    .test(
      'phone-format',
      'Le numéro doit contenir exactement 9 chiffres',
      value => {
        if (!value) return false; // Gère le cas undefined/null
        const cleaned = String(value).replace(/\D/g, ''); // Conversion en string + nettoyage
        return /^\d{9}$/.test(cleaned);
      }
    )
});


// Schéma de validation des données de creation de compte: information de connexion
export const validationSchemaCompte = yup.object().shape({
  name: yup.string().required('Nom requis'),
  // surname: yup.string().required('Prénom est requis'),
  surname: yup.string(),
  email: yup.string().email('Email invalide').required('Email requis'),
  phone: yup.number().typeError('Numéro de téléphone invalide').required('Numéro de téléphone requis'),
  // phone: yup.number().required('user name est requis'),
  // nameofuser: yup.string().required("Nom d\'utilisateur requis"),
  // nameofuser: yup.string().required('Compte est requis'),
  // idcarte: yup.string().required('ID Carte requis'),
  // idcarte: yup.string().required('ID Carte est requis'),
  // date_of_berth: yup.string().required('Date de naissance requise'),
  // date_of_birth: yup.date().required('Date de naissance est requise'),
  // height: yup.number().required('Taille est requise'),
  // height: yup.number().typeError('Taille invalide').required('Taille requise'),
  // weight: yup.number().required('Poids est requis'),
  // weight: yup.number().typeError('Poids invalide').required('Poids requis'),
  // signature: yup.string().required('Signature est requise'),
  // pwd: yup.string().required('Password est requise'),
  
  // signature: yup.string().required('Signature requise'),
  pwd: yup.string().required('Mot de passe requis'),
  pwd2: yup.string().required('Mot de passe requis'),
});


// Schéma de validation des données de réponse : information du compte 
export const userDataValidationSchema = yup.object().shape({
  User_name: yup.string().required('User_name is required'), 
  date_creation: yup.string().required('date_creation is required'), 
  etat: yup.string().required('etat is required'), 
  id_personne: yup.number().required('id_personne is required'), 
  identifiant_usercompte: yup.number().required('identifiant_usercompte is required'), 
  type: yup.string().required('type is required'), 
});
