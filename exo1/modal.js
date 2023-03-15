import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function MyModal(props) {

    const [valeur , setValeur] = useState("");
    const [n , setN] = useState(0);

  return (
    <Modal visible={props.visible}>
        <View>
            <Button title='Ajouter' onPress={()=>props.ajoutListe(valeur,n)}/>
            
        </View>
        <View>
        <TextInput
            style={styles.input}
            placeholder="Article"
            keyboardType="default"
            onChangeText={(newValeur) => setValeur(newValeur)}
            />
        <TextInput
            style={styles.input}
            placeholder="Quantité"
            keyboardType="numeric"
            onChangeText={(newN) => setN(newN)}
            />
        </View>
        <View>
            <Button title='Accueil' onPress={props.closeModal}/>
        </View>
    </Modal>
    
  )
}

const styles = StyleSheet.create({})