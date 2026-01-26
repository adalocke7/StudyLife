import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

type MapRegion = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export default function LiveTrackingScreen() {
  const [region, setRegion] = useState<MapRegion | null>(null);
  const [routeCoords, setRouteCoords] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      const sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 30000,
          distanceInterval: 5, // update every 5 m
        },

        (pos) => {
          const { latitude, longitude } = pos.coords;
          setRouteCoords((prev) => [...prev, { latitude, longitude }]);
          setRegion((r) => r? { ...r, latitude, longitude }: 
                {
                  latitude,
                  longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }
          );
        }
      );

      return () => sub.remove();
    })();
  }, []);

  if (!region) return null;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {routeCoords.length > 0 && (
          <>
            <Polyline coordinates={routeCoords} strokeWidth={4} strokeColor="#007AFF" />
            <Marker coordinate={routeCoords[routeCoords.length - 1]} title="You" />
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
