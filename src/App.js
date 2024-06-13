
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "./views/HomeScreen"
import SobreScreen from "./views/SobreScreen"
import ProdutosScreen from "./views/ProdutosScreen"
import ContatoScreen from "./views/ContatoScreen"

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Sobre" component={SobreScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="information" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Produtos" component={ProdutosScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="menu" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Contato" component={ContatoScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={size} />
                    )
                }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;