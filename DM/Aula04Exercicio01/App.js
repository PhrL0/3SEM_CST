// Importa os módulos necessários do React e React Native
import React, { useState } from 'react'; 
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// Função principal do componente App
const App = () => {
  // useState cria um estado para armazenar o valor do nome e a mensagem
  const [nome, SetNome] = useState(''); // Estado para armazenar o nome do usuário
  const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem de resposta

  // Função chamada quando o botão é clicado
  const lidarComClique = () => {
    // Verifica se o nome foi inserido
    if (nome) {
      // Se o nome foi inserido, exibe a saldação personalizada
      setMensagem(`Olá, ${nome}!`);
    } else {
      // Caso o nome não tenha sido inserido solicita que o nome seja preenchido
      setMensagem('Por favor, digite seu nome. ');
    }
  };

  // Renderiza o componente
  return (
    <View style={styles.container}>


      <View style={styles.containerFotos}>
        {/* Exibe uma imagem com o arquivo de imagem em um diretorio */}
        <Image source={require('./images.jpg')} style={styles.image} />
        <Image source={require('./_image.webp')} style={styles.image} /> 
        <Image source={require('./meu-gato-é-praticamente-o-gato-do-meme-v0-n9dleoj8dgfc1.webp')} style={styles.image} /> 

      </View>

      {/* Exibe um título com estilo definido */}
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      {/* Campo de texto onde o usuário pode digitar seu nome */}
      <TextInput
        style={styles.input} // Aplica o estilo definido para o input
        placeholder="Digite seu nome" // Dica no campo de input
        onChangeText={SetNome} // Atualiza o estado sempre que o texto é alterado
        value={nome} // Valor atual do estado 'nome'
      />

      {/* Botão que chama a função 'lidarComClique' quando apertado */}
      <Button title="Enviar" onPress={lidarComClique}></Button>

      {/* Exibe a mensagem após o clique no botão */}
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null} 
    </View>
  );
};

// Definição dos estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },
  containerFotos: {
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
  },
  image: {
    width: 300, 
    height: 300, 
    alignSelf: 'center', 
    marginVertical: 20,
  },
  titulo: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  input: {
    width: '100%', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingHorizontal: 10, 
  },
  mensagem: {
    marginTop: 20, 
    fontSize: 16, 
  },
});

// Exporta o componente 'App' para ser usado em outros códigos 
export default App;
