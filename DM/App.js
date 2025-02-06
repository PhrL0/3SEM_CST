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
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <view style={styles.header}>
        <text style={styles.title}>Meu App Expo</text>
      </view>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      ></Image>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      ></TextInput>

      <Text style={styles.textOutput}>Você digitou: {text}</Text>

      <Button
        title="Pressione-me"
        onPress={() => alert('Botão pressionado')}
      ></Button>
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
    width: 100,
    height: 100,
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
