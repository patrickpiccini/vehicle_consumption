import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, { useState, useLayoutEffect} from 'react';
import CaixaText from '../components/CaixaText';
import Calculo from './Calculo';

export default function Home({navigation}) {

  const [kilometer, setKilometer] = useState("")
  const [litros, setLitros] = useState("")

  const verifyBox = () => {
    if(kilometer != "" && litros != ""){
      navigation.navigate('Calculo',{
        kilometer:kilometer,
        litros:litros,
      })
    } else {
      Alert.alert("Preencha todos os campos")
    }

  }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Button onPress={() => navigation.replace("Login")} title="Sair" color='white'/>
          ),
        });
      }, [navigation]);

    

  return (

    <View style={styles.container}>

      <View style={styles.box}>

        <Text style={styles.subTitle}> Insira as informações abaixo</Text>
      
        <CaixaText 
          value={kilometer}
          set={setKilometer}
          place="Kilometers"
          teclakey='numeric'
          />

        <CaixaText 
          value={litros}
          set={setLitros}
          place="Litros"
          teclakey='numeric'
          />
        
        <View style={styles.btn}>
          <Button
          title='Calcular'
          color='#262626'
          onPress={verifyBox} 
          />

        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#262626',
      // alignItems: 'center',
      // justifyContent: 'center',
      
      
    },
    box:{
      marginTop: 55
    },
    btn:{
      backgroundColor: 'white', 
      borderRadius: 10, 
      marginHorizontal: 30 , 
      margin: 30,

    },
    subTitle:{
      fontSize: 19,
      color: "white",
      textAlign: "center",
      marginBottom: 50

  }
  
  });
  