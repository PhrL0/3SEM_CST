import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import styles from "./styles";

const API_KEY = ""; 

export default function WhereAmI() {
  const [address, setAddress] = useState("Loading...");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    let watcher;

    async function getLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setAddress("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
        (location) => {
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        }
      );
    }

    getLocation();

    return () => {
      watcher?.remove();
    };
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&latlng=${latitude},${longitude}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(({ results }) => {
          if (results.length > 0) {
            setAddress(results[0].formatted_address);
          } else {
            setAddress("No address found");
          }
        })
        .catch((error) => {
          console.log(error.message);
          setAddress("Error fetching address");
        });
    }
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}
