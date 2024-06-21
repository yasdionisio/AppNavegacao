import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-paper";


export default function HomeScreen(props) {

    return (
        <ScrollView>
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15
            }}>

                <View>
                    <Text style={estilos.titulo}>SerTerra Queijaria</Text>
                </View>

                <View>
                    <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 15}}>Queijos, vinhos, geleias e varios outros produtos 
                        artesanais para alegrar o seu dia </Text>
                </View>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/queijoPerimbo.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">QUEIJO PERIMBÓ - 300G</Text>
                                <Text variant="titleLarge">R$89,90</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>

                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/queijoLenda.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">QUEIJO A LENDA - 140G</Text>
                                <Text variant="titleLarge">R$39,90</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>

                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/geleiaMexericaClementina.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">GELEIA DE MEXERICA CLEMENTINA</Text>
                                <Text variant="titleLarge">R$39,90</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                    
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/geleiaPimentaDefumada.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">GELEIA DE PIMENTA DEFUMADA</Text>
                                <Text variant="titleLarge">R$39,90</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                    
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/doceJabuticaba.webp")} />

                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">DOCE DE JABUTICABA DE CORTE</Text>
                                <Text variant="titleLarge">R$42,90</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                    
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/torroneAmendoa.webp")} />
                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">TORRONE AMÊNDOA - 90G</Text>
                                <Text variant="titleLarge">R$27,00</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/vinhoDonGioanni.webp")} />
                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">DON GIOVANNI NATURE</Text>
                                <Text variant="titleLarge">R$138,00</Text>
                            </View>

                            <Card.Actions>
                                <Button>Comprar</Button>
                            </Card.Actions>

                        </View>
                    </Card.Content>
                </Card>

                <Card style={estilos.card}>
                    <Card.Cover source={require("../assets/excelenciaClassica.webp")} />
                    <Card.Content>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 13
                        }}>
                            <View>
                                <Text variant="titleLarge">EXCELÊNCIA CLÁSSICA</Text>
                                <Text variant="titleLarge">R$44,00</Text>
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