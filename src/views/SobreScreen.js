import {View, Text, Button} from "react-native";

export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre Screen</Text>
            <Button
                title='Ir para Home'
                onPress={() => props.navigation.navigate('Home')}
            />
            <Button
                title='Ir para Produtos'
                onPress={() => props.navigation.navigate('Produtos')}
            />
            <Button
                title='Ir para Contato'
                onPress={() => props.navigation.navigate('Contato')}
            />
        </View>
    );
}