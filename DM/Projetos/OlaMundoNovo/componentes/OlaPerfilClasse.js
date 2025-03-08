import React from "react";
import { StyleSheet, Text, View } from 'react-native';

class OlaPerfilClasse extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Olá Pedro Classe</Text>
                <Text style={styles.text}>Endereço: Classe</Text>
                <Text style={styles.text}>Telefone: Classe</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    }
});

export default OlaPerfilClasse;
