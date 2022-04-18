import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button ,Alert} from 'react-native';
import CaixaText from '../components/CaixaText';
import { useState } from 'react';


export default function Login(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigation = props.navigation

  //verifica se o ususario e senha estão corretos para ir para tela da Home
  const validaLogin = () => {
      if(username == "Admin" && password == "admin"){
        navigation.replace("Home")
      } else {
        Alert.alert("Usuario ou senha invalido!")
      }
  }

  return (
    <View style={styles.container}>
      <View>
        <CaixaText 
          value={username}
          set = {setUsername}
          place = "Username"
        />
        <CaixaText 
          value={password}
          set = {setPassword}
          place = "Password"
          security={true}
        />
      </View>
      <View style={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 30 , margin:30}}>
        <Button
        title='Entrar'
        color='#262626'
        onPress={validaLogin}
        />

      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    // alignItems: 'center',
    justifyContent: 'center',
    alignContent: "center"
  },
  lista:{
    height:300
  },
});
