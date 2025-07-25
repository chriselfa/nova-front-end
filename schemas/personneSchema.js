import * as yup from 'yup';

// Schéma de validation des données de connexion: information de Personne
export const PersonneBaseSchema = yup.object().shape({
  nom: yup.string().required('Nom est requis'),
  prenom: yup.string().required('Prénom est requis'),
  sexe: yup.number().required('Sexe est requis'),
  idcarte: yup.string().required('ID Carte est requis'),
  date_of_berth: yup.date().required('Date de naissance est requise'),
  height: yup.number().required('Taille est requise'),
  weight: yup.number().required('Poids est requis'),
  signature: yup.string().required('Signature est requise'),
});


// Schéma de validation des données de réponse : information du Personne 
export const PersonneSchema = yup.object().shape({
    id_personne: yup.number().required('Sexe est requis'),
    nom: yup.string().required('Nom est requis'),
    prenom: yup.string().required('Prénom est requis'),
    sexe: yup.number().required('Sexe est requis'),
    idcarte: yup.string().required('ID Carte est requis'),
    date_of_berth: yup.date().required('Date de naissance est requise'),
    height: yup.number().required('Taille est requise'),
    weight: yup.number().required('Poids est requis'),
    signature: yup.string().required('Signature est requise'),
  });
  
  



