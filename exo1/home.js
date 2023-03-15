import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyModal from './modal';

export default function Home() {

  const [modalVisible,setModalVisible] = useState(false);

  const [listeDeCourses,setListeDeCourses] = useState([
    {id : 0 , nom : "Pates" , quantite : 10}
  ]);
  

  function mdVisible() {
    setModalVisible(true)
    console.log(listeDeCourses)
}

  function closeModal(){
    setModalVisible(false)
}

function ajoutListe(n,q){
  setListeDeCourses([...listeDeCourses , {id : 1, nom : n , quantite : q}])
  setModalVisible(false)
}

function retirerArticle(n){
  setListeDeCourses(listeDeCourses.filter(article => article.id != n))
}

  return (
    <View>
      <Text style={styles.title}>Ma super liste de courses</Text>
      <View>
        <Text style={styles.desc}>
          Vous pouvez entrez ici toutes les courses de la semaine pour ne pas oublier :D
        </Text>
        <MyModal visible={modalVisible} closeModal={closeModal} ajoutListe={ajoutListe}/>
        <Button title='Entrez un article' onPress={mdVisible} />

        <FlatList data={listeDeCourses} renderItem={(itemData) => {
                return (
                  <Pressable onPress={()=>retirerArticle(itemData.item.id)}>
                      <View>
                          <Text style={styles.datas}>Il faut {itemData.item.nom} x{itemData.item.quantite}</Text>
                      </View>
                    </Pressable>
                )
            }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
            />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title : {
    fontSize: 28,
    textAlign: "center",
    color : "black",
    margin : 12
  },
  desc : {
    textAlign : "center",
    fontSize : 18,
    marginBottom : 36
  },
  datas : {
      fontSize : 18,
      padding : 12
      
  }
  
})