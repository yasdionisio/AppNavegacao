import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-paper";


export default function HomeScreen(props) {

    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15
            }}>

                <View>
                    <Text style={estilos.titulo}>SerTerra Queijaria</Text>
                </View>

                <View>
                    <Text style={{fontSize: 16, alignSelf: 'center', marginTop: 15}}>As junções das 
                          melhores combinações para você
                    </Text>
                </View>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/KitAmor.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">KIT AMOR INCONDICIONAL</Text>
                                <Text variant="titleLarge">R$588,00</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>

                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/KitHarmonia.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">KIT HARMONIA</Text>
                                <Text variant="titleLarge">R$288,00</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                    
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/kitCarinhoso.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">KIT CARINHOSO</Text>
                                <Text variant="titleLarge">R$138,00</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                    
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/KitSaudade.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">KIT SAUDADE</Text>
                                <Text variant="titleLarge">R$328,00</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                    
                </Card>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        width: "100%",
        margin: 10
    },
    titulo: {
        fontSize: 40,
        marginBottom: 15,
    }
})