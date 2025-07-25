import * as SQLite from 'expo-sqlite'

export const ouvrirLaDB = async () => await SQLite.openDatabaseAsync("nova-db")

export const creerLesTables = async (db) => {

    try {
       // const db = await ouvrirLaDB("nova-db")

        await db.execAsync(
            `CREATE TABLE IF NOT EXIST User(
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            nom VARCHAR(225) NOT NULL,
            email VARCHAR(225) NOT NULL,
            telephone INTEGER NOT NULL,
            nomUtilisateur  VARCHAR(225) NOT NULL,
            motDePasse VARCHAR(255) NOT NULL,
        );`
        )

        await db.execAsync(
            `CREATE TABLE IF NOT EXIST Transaction(
            id INTEGER PRIMARY KEY,
            nom VARCHAR(225) NOT NULL,
            date DATE NOT NULL,
            prix INTEGER NOT NULL,
            type  VARCHAR(50) NOT NULL,
        );`
        )

        console.log("Create success")

        return true

    } catch (error) {
        throw new Error("Une erreur est survenue lors de la creation des tables :" + error)
    }
}

export const insererUtilisateur = async (db, { nom, email, tel, nomUtilisateur, motDePasse }) => {
    try {
        ///const db = await ouvrirLaDB("nova-db")
        await db.execAsync(
            `INSERT INTO User (nom, email, tel, nomUtilisateur, motDePasse) VALUES (?,?,?,?,?)`,
            nom, email, tel, nomUtilisateur, motDePasse
        )
        console.log("Insert success")
    } catch (error) {
        throw new Error("Une erreur est survenue lors de l'insertion de l'utilisateur :" + error)
    }
}

export const insererTransaction = async (db, { id, nom, data, prix, type }) => {
    try {
        //const db = await ouvrirLaDB("nova-db")
        await db.execAsync(
            `INSERT INTO Transaction VALUES (?,?,?,?,?)`,
            id, nom, data, prix, type
        )
        console.log("Insert success")
    } catch (error) {
        throw new Error("Une erreur est survenue lors de l'insertion de la transaction :" + error)
    }
}


export const getAllUsers = async (db) => {
    try {
        //const db = await ouvrirLaDB("nova-db")
        await db.execAsync(
            `SELECT * FROM Users;`
        )
        console.log("Insert success")
    } catch (error) {
        throw new Error("Une erreur est survenue lors de l'insertion de la transaction :" + error)
    }
}
/**
 *  {
      id:1,
      //imageUrl:require("../assets/images/20240413_081541.jpg"),
      name:"Sam",
      date:new Date(Date.now()),
      prix:5000,
      type:'depot',
    },
 */
//Here i will create database's tables to keep user data in the app
// Well stored. So things to keep are all the user's information, and the transactions

//User 