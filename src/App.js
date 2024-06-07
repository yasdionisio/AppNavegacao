// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./views/HomeScreen"
import SobreScreen from "./views/HomeScreen"
import ProdutosScreen from "./views/HomeScreen"
import ContatoScreen from "./views/HomeScreen"







const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Sobre" component={SobreScreen} />
                <Stack.Screen name="Produtos" component={ProdutosScreen} />
                <Stack.Screen name="Contato" component={ContatoScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;