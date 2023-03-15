import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Accueil() {

    const [temps,setTemps] = useState(0)
    let condition = false

    const demarrerPomodoro = () => {
        if(condition){
            setTemps(40);
            diminuer();
        } else {
            setTemps(20)
            diminuer();
        }
    }

    const diminuer = () => {
            setInterval(function(){
                setTemps(temps-1)
            },1000)
    }

    useEffect(()=> {
        console.log(temps)
    },[])

  return (
    <View>
        <Text>Pomodoro</Text>
        <View>
            <Text>
                 {temps.toString()}
            </Text>
            <Button title={"presse"} onPress={demarrerPomodoro}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

})