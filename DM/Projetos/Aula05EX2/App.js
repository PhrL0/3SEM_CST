import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

const App = () => {

  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  const handlePress = () => {
    alert('Botão pressionado');
  };

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: text }]); 
    setText('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>
          Exemplo de App React Native
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          onChangeText={setText}
          value={text}
        />
        <Button title="Adicionar Item" onPress={addItem} />
      </View>

 
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

   
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
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
  },
});

export default App;
