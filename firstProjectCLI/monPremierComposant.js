import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function MonPremierComposant() {

    const tab = [
        { text : "toto" , id : 1},
        { text : "tata" , id : 2},
        { text : "tutu" , id : 3},
        { text : "toto" , id : 4},
        { text : "tata" , id : 5},
        { text : "tutu" , id : 6},
        { text : "toto" , id : 7},
        { text : "tata" , id : 8},
        { text : "tutu" , id : 9},
        { text : "toto" , id : 10},
        { text : "tata" , id : 11},
        { text : "tutu" , id : 12},
        { text : "toto" , id : 13},
        { text : "tata" , id : 14},
        { text : "tutu" , id : 15},
        { text : "toto" , id : 16},
        { text : "tata" , id : 17},
        { text : "tutu" , id : 18},
        { text : "toto" , id : 19},
        { text : "tata" , id : 20},
        { text : "tutu" , id : 21},
        { text : "toto" , id : 22},
        { text : "tata" , id : 23},
        { text : "tutu" , id : 24}
    ]

return (
    <View style={styles.container}>
        <Button title='Mon bouton'/>
        <Text>Mon texte</Text>
        <TextInput />
        <FlatList data={tab} renderItem={(itemData) => {
                return (
                    <View>
                        <Text style={styles.texte}>{itemData.item.text}</Text>
                    </View>
                )
            }} keyExtractor={(item,index) => {
                return item.id;
            }}/>
    </View>
    
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "red"
    },
    texte : {
        color:'white',
        padding: 12,
        fontSize: 24
    }
})