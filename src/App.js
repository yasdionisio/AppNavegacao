
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from "./views/HomeScreen"
import SobreScreen from "./views/SobreScreen"
import KitsScreen from "./views/KitsScreen"
import ProdutosScreen from "./views/ProdutosScreen"
import ContatoScreen from "./views/ContatoScreen"
import { Avatar } from 'react-native-paper';

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

                    headerRight: ({color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={50} />
                    ),

                    headerLeft: ({color, size}) => (
                        <Avatar.Image style={{alignSelf: 'center', margin: 20}} 
                        size={45} source={ require("./assets/logoSerTerra.png") } />
                    )
                    
                }}
                />
                <Tab.Screen name="Produtos" component={ProdutosScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="menu" color={color} size={size} />
                    ),

                    headerRight: ({color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={50} />
                    ),

                    headerLeft: ({color, size}) => (
                        <Avatar.Image style={{alignSelf: 'center', margin: 20}} 
                        size={45} source={ require("./assets/logoSerTerra.png") } />
                    )
                }}
                />
                <Tab.Screen name="Kits" component={KitsScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="gift-outline" color={color} size={size} />
                    ),

                    headerRight: ({color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={50} />
                    ),

                    headerLeft: ({color, size}) => (
                        <Avatar.Image style={{alignSelf: 'center', margin: 20}} 
                        size={45} source={ require("./assets/logoSerTerra.png") } />
                    )
                }}
                />
                <Tab.Screen name="Sobre" component={SobreScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="information" color={color} size={size} />
                    ),

                    headerRight: ({color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={50} />
                    ),

                    headerLeft: ({color, size}) => (
                        <Avatar.Image style={{alignSelf: 'center', margin: 20}} 
                        size={45} source={ require("./assets/logoSerTerra.png") } />
                    )
                }}
                />
                <Tab.Screen name="Contato" component={ContatoScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={size} />
                    ),

                    headerRight: ({color, size}) => (
                        <MaterialCommunityIcons
                        name="account" color={color} size={50} />
                    ),

                    headerLeft: ({color, size}) => (
                        <Avatar.Image style={{alignSelf: 'center', margin: 20}} 
                        size={45} source={ require("./assets/logoSerTerra.png") } />
                    )
                }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;