import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OlaPerfilFuncao() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá Pedro</Text>
      <Text style={styles.info}>Seu endereço: xxxxxxxxx</Text>
      <Text style={styles.info}>Telefone: (xx) xxxx-xxxx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
});
