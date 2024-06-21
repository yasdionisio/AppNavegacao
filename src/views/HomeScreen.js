import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen(props) {

    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15
                }}>

                <View>
                    <Text style={estilos.titulo}>SerTerra Queijaria</Text>
                </View>


                <View style={estilos.produtosArtesanais}>

                    <View>
                        <MaterialCommunityIcons
                            name="home-account" color="gray" size={45} style={{ margin: 3 }} />
                    </View>

                    <View>
                        <Text style={estilos.text}>PRODUTOS ARTESANAIS</Text>
                        <Text>Desbrave o Brasil através do paladar</Text>
                    </View>

                </View>

                <View style={estilos.recebaEmCasa}>

                    <View>
                        <MaterialCommunityIcons
                            name="truck" color="gray" size={45} style={{ margin: 3 }} />
                    </View>

                    <View>
                        <Text style={estilos.text}>RECEBA EM CASA</Text>
                        <Text>Diversas opções de frete disponíveis</Text>
                    </View>

                </View>
                <View style={estilos.garantia}>

                    <View>
                         <MaterialCommunityIcons
                        name="truck" color="gray" size={45} style={{ margin: 3 }} />
                    </View>
                   
                    <View>
                        <Text style={estilos.text}>GARANTIA</Text>
                    <Text>Produtos criteriosamente selecionados</Text>
                    </View>
                    
                </View>
            </View>

            <Card style={estilos.card}>
                <Card.Cover source={require("../assets/queijoFigueira.webp")} />

                <Card.Content>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 13
                    }}>
                        <Text variant="titleLarge">Queijos</Text>
                        <Text variant="titleLarge">></Text>
                    </View>
                </Card.Content>

            </Card>

            <Card style={estilos.card}>
                <Card.Cover source={require("../assets/geleiaAmora.webp")} />

                <Card.Content>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 13
                    }}>
                        <Text variant="titleLarge">Géleias</Text>
                        <Text variant="titleLarge">></Text>
                    </View>
                </Card.Content>

            </Card>

            <Card style={estilos.card}>
                <Card.Cover source={require("../assets/queijosAlagoaEGeleiaDePimenta.webp")} />

                <Card.Content>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 13
                    }}>
                        <Text variant="titleLarge">Kits</Text>
                        <Text variant="titleLarge">></Text>
                    </View>

                </Card.Content>
            </Card>

            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Veja mais
            </Button>
        
        </ScrollView >
    );
}

const estilos = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        width: "100%",
        margin: 10
    },

    produtosArtesanais: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        margin: 10
    },

    recebaEmCasa: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        margin: 10
    },

    garantia: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        margin: 10
    },
    titulo: {
        fontSize: 40,
        marginBottom: 15,
    }
})