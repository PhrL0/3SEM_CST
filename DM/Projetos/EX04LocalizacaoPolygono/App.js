import React from "react";
import { View, Text, StatusBar } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

type Overlay = {
  coordinates: { latitude: number; longitude: number }[];
  strokeColor: string;
  strokeWidth: number;
};

const ipaRegion: Overlay = {
  coordinates: [
    { latitude: 43.8445, longitude: -79.0850 },
    { latitude: 43.8455, longitude: -79.0820 },
    { latitude: 43.8430, longitude: -79.0805 },
    { latitude: 43.8415, longitude: -79.0825 },
    { latitude: 43.8425, longitude: -79.0855 },
  ],
  strokeColor: "coral",
  strokeWidth: 4,
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 43.8435,
          longitude: -79.0830,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polygon
          coordinates={ipaRegion.coordinates}
          strokeColor={ipaRegion.strokeColor}
          strokeWidth={ipaRegion.strokeWidth}
          fillColor="rgba(255,127,80,0.3)" // coral com transparência
        />
      </MapView>
    </View>
  );
}
