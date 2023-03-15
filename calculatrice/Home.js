import { StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import BoutonPerso from './components/BoutonPerso';

export default function Home() {

    const ajouterValeur = (valeurA) => {
        
    }

return (
    <View style={styles.container}>
        <View style={styles.ligne}>
            <View style={styles.res}>
                <Text style={styles.resTexte}></Text>
            </View>
        </View>
        <View style={styles.ligne}>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"7"} colorTexte={"#0be881"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"8"} colorTexte={"#0be881"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"9"} colorTexte={"#0be881"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"x"} colorTexte={"#0be881"}/>
        </View>
        <View style={styles.ligne}>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"4"} colorTexte={"#34e7e4"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"5"} colorTexte={"#34e7e4"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"6"} colorTexte={"#34e7e4"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"-"} colorTexte={"#34e7e4"}/>
        </View>
        <View style={styles.ligne}>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"1"} colorTexte={"#4bcffa"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"2"} colorTexte={"#4bcffa"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"3"} colorTexte={"#4bcffa"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"+"} colorTexte={"#4bcffa"}/>
        </View>
        <View style={styles.ligne}>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"C"} colorTexte={"#575fcf"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"0"} colorTexte={"#575fcf"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"/"} colorTexte={"#575fcf"}/>
            <BoutonPerso ajouterValeur={ajouterValeur} valueTexte={"="} colorTexte={"#575fcf"}/>
        </View>
    </View>
);}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    flexDirection : "column",
  },
    ligne: {
        flexDirection : "row",
        height : "20%"
    },
    res : {
        width : "100%",
        paddingRight : 24,
        backgroundColor:"#f1f2f6",
        borderBottomWidth : 2,
        borderBottomColor : "black",
        alignItems: "flex-end",
        justifyContent : "center",
    },
    resTexte : {
        fontSize : 62,
        color : "black",
        fontWeight :"700"
    }
});
