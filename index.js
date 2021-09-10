import { AppRegistry } from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        desc: 'Las pupusas pueden llevar mucho ingredientes pero las más comunes son las de frijol con queso. ',
        src: require('./src/img/pupusas.jpg'),
    },
    {
        id: '2',
        title: 'Enchiladas',
        desc: 'Llevan aguacate, huevo duro, repollo, salsa de tomate, tomate, pepino.',
        src: require('./src/img/enchiladas.jpg'),
    },
    {
        id: '3',
        title: 'Pasteles',
        desc: 'Usualmente llevan papa, zanahoria,',
        src: require('./src/img/pasteles.jpg'),
    },
];



/*const Item = ({ title, img }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.img} source={img} />
    </View>
);
*/
const App = () => {
    /* const renderItem = ({ item }) => (
         <Item title={item.title} img={item.src} />
     );*/

    return (
        <ScrollView>

            {
                DATA.map((u, i) => {
                    return (
                        <View key={i} style={estilos.contenedor}>

                            <Card >
                            <Card.Title>{u.title}</Card.Title>
                                <View style={estilos.carta}>
                                <Card.Image resizeMode="cover" source={u.src} style={estilos.imagen} ></Card.Image>
                               
                                <Text style={estilos.desc}>{u.desc}</Text>
                                
                                </View>
                                
                            </Card>

                        </View>

                    );
                })
            }




        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        marginTop: 10,
        marginBottom: 10,
        

    },

    carta: {

        
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center", // ignore this - we'll come back to it
        flexDirection: "row",
       
    },

    imagen: {
        width: 100,
        height: 100,
        borderRadius: 100,
        flex:1,

    },
    titulo: {
        textAlign: 'center',
       
    },
    desc: {
        flex:3,
    },
});



AppRegistry.registerComponent("discusion_guia3", () => App);