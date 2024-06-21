import { View, Button, ScrollView } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";

export default function HomeScreen(props) {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>

            <View>
                <Avatar.Image style={{ alignSelf: 'center', margin: 20, backgroundColor: "white" }} size={185} source={require('../assets/logoSerTerra.png')} />
            </View>

            <View>
                <Text style={{ fontSize: 15, alignSelf: 'center', marginTop: 15 }}>Atendimento de 9:00 às 17:00 nos dias úteis. Para chamar no WhatsApp
                    basta clicar na imagem.
                </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Card>
                    <Card.Content>
                        <Text variant="titleLarge">Contato</Text>
                        <Text variant="bodyMedium">(14) 12345-6789</Text>
                        <Text variant="bodyMedium">SerTerrasQueijaria@gmail.com</Text>
                        <Text variant="bodyMedium">Rua Ismael Junqueira de Souza, Barra Bonita - SP</Text>
                        <Text variant="bodyMedium"></Text>
                        <Text variant="titleLarge">Atendimento (loja física)</Text>
                        <Text variant="bodyMedium">Segunda a Sábado - das 9h às 18:30h</Text>
                        <Text variant="bodyMedium">Domingos e Feriados - das 9h às 17h</Text>

                    </Card.Content>
                </Card>
            </View>
        </ScrollView>

    );
}