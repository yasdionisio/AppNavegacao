import { View, Button, ScrollView } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";

export default function HomeScreen(props) {
    return (
        <ScrollView style={{backgroundColor:"white"}}>

            <View>
                <Avatar.Image style={{alignSelf: 'center', margin: 20, padding: 0, backgroundColor: "white"}} size={185} source={require('../assets/logoSerTerra.png')} />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 15 }}>
                <Card>
                    <Card.Content>
                        <Text variant="titleLarge">Sobre a nossa empresa</Text>
                        <Text variant="bodyMedium">A SerTerra Queijaria é o destino definitivo para os amantes
                            de queijo, oferecendo uma seleção incomparável dos melhores queijos já produzidos.
                            Em nosso site, os visitantes têm a oportunidade de explorar a fascinante origem da
                            criação de queijos, descobrir os melhores queijos brasileiros, aprender sobre seus
                            métodos de produção e identificar as melhores ocasiões e acompanhamentos para
                            desfrutar de cada variedade. Além disso, proporcionamos a conveniência de adquirir
                            nossos queijos de acordo com as preferências individuais e a ocasião específica.
                            Na SerTerra Queijaria, reunimos os mais refinados conhecimentos sobre queijo em um
                            único local, garantindo uma experiência excepcional para todos os apreciadores.
                        </Text>
                    </Card.Content>
                </Card>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 15 }}>
                <Card>
                    <Card.Content>
                        <Text variant="titleLarge">Sobre o nosso nome</Text>
                        <Text variant="bodyMedium">O nome 'SerTerra Queijaria' une 'Ser', que significa 
                        autenticidade e qualidade dos produtos, com 'Terra', representando a origem natural 
                        dos ingredientes usados em nossos queijos. 
                        Juntos, esses elementos refletem nosso compromisso com produtos genuínos e de alta 
                        qualidade, além de nossa conexão com a natureza, transmitindo uma mensagem positiva
                        sobre nossos valores e filosofia como empresa.
                        </Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>

    );
}