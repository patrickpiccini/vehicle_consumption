import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Calculo from './src/pages/Calculo';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{headerTintColor:"white",headerStyle: {backgroundColor:"#1B1B1B"}}}
      >

      <Stack.Screen 
          name="Login" 
          component={Login} 
          options={
            {title:"Consumo Veiculo"}}
          />

      <Stack.Screen 
        name='Home'
        component={Home}
      />

      <Stack.Screen 
        name='Calculo'
        component={Calculo}
      />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;