import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  //Cria um estado para armazenar o valor do nome e a mensagem
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  //Função chamada quando o botão é clicado
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (

    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('./miao.jpg')}
          style={styles.image}
        />
        {/* Insere um texto na tela */}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {/* Guarda o nome digitado no input */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        {/* Mostra uma saudação com o nome digitado no input */}
        <Button title="Enviar" onPress={lidarComClique} />
      </View>
      {/* verifica se mensagem é verdadeiro se for ele mostra mensagem se não retorna null */}
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      {/* Deixa o botão com opacidade quando clicado */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

//Adiciona estilos aos componentes do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
