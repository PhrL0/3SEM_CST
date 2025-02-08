import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu App Expo</Text>
      </View>

      <View style={styles.container}>
        <Image source={require('./images.jpg')} style={styles.image} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />

      <Text style={styles.textOutput}>Você digitou: {text}</Text>

      <Button title="Pressione-me" onPress={() => alert('Botão pressionado')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 500,
    height: 500,
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  textOutput: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
});
