import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useLayoutEffect} from 'react';

export default function Calculo(props) {

    const {kilometer, litros} = props.route.params
    const [resp, setResp] = useState()
    const media = kilometer/litros

    useLayoutEffect(() => {
        
        if(media <= 4){
            setResp("E")
        } else if(media < 8) {
            setResp("D")
        } else if(media < 10) {
            setResp("C")
        } else if(media < 12) {
            setResp("B")
        } else {
            setResp("A")
        } 
    }, [])

  return (
    <View style={styles.container}>
        
        <Text style={styles.titulo} >Indicação de Consumo de Veículos</Text>
        <Text style={styles.consumo}>Consumo médio: {media}</Text>

        <View style={styles.box}>
            <Text style={styles.texto}>
                {resp == "A" ? ">>>  " : ""}{"\n"}
                {resp == "B" ? ">>>  " : ""}{"\n"}
                {resp == "C" ? ">>>  " : ""}{"\n"}
                {resp == "D" ? ">>>  " : ""}{"\n"}
                {resp == "E" ? ">>>  " : ""}{"\n"}
            </Text>
            <Text style={styles.texto}>
                A - Mais de 12 Km/l {"\n"}
                B - Até 12 Km/l {"\n"}
                C - Até 10 Km/l{"\n"}
                D - Até 8 Km/l{"\n"}
                E - Até 4 Km/l{"\n"}
            </Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center',
    },
    texto:{
        fontSize: 20,
        color: "white",
        textAlign: "left",
    },
    titulo:{
        fontSize: 20,
        color: "white",
        marginBottom: 10,
        fontWeight: "bold"
    },
    consumo:{
        fontSize: 20,
        color: "white",
        marginBottom: 30,
        fontWeight: "bold"
    }

  
  });
  