import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao></OlaPerfilFuncao>
      <OlaPerfilClasse></OlaPerfilClasse> 
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
