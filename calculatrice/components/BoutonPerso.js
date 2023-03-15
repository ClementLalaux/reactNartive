import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BoutonPerso(props) {

    const color = props.colorTexte

  return (
    <Pressable style={styles.chiffre} onPress={()=>props.ajouterValeur(props.valueTexte)}>
        <View style= {[styles.viewChiffre,{backgroundColor : color}]}>
            <Text style={styles.chiffreTexte}>{props.valueTexte}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    chiffre: {
        width : "25%",   
    },
    viewChiffre : {
        width : "100%",
        height : "100%",
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 6,
        alignItems: "center",
        justifyContent : "center"
    },
    chiffreTexte : {
        fontSize : 32,
        color : "black",
        fontWeight :"500" 
    }
});