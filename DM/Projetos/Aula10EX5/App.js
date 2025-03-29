import React from 'react';
import styles from "./Styles";
import { StyleSheet, StatusBar, View } from 'react-native';
import Box from "./Box";

const boxes = new Array(10).fill(null).map((v,i) => i + 1);
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {boxes.map((i)=>(
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  );
}
