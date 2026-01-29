import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

//Determines the colors of the dark mode map
const darkMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];

//Initializes the variables for the mapregion
type MapRegion = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export default function LiveTrackingScreen() {
  //Initializes the variable constants
  const [region, setRegion] = useState<MapRegion | null>(null);
  const [routeCoords, setRouteCoords] = useState<any[]>([]);
  const [markerCoord, setMarkerCoord] = useState<{latitude: number, longitude: number} | null>(null);

  useEffect(() => {
    (async () => {

      //Requests location permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      //Gets the current location and assigns it
      const loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;

      //Sets the region
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      //Watches the location and updates every 5 meters or 30 seconds
      const sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 30000,
          distanceInterval: 5, 
        },

        (pos) => {
          //Updates the region based on the changed postition relative to previous position
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

//Renders the map
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        region={region} 
        customMapStyle={darkMapStyle}
        onPress={(e) => setMarkerCoord(e.nativeEvent.coordinate)}
      >
        {routeCoords.length > 0 && (
          <>
            <Marker coordinate={routeCoords[routeCoords.length - 1]} title="You" /> 
          </>
          //latest position marker
        )}
        {markerCoord && (
          <Marker 
            coordinate={markerCoord} 
            draggable 
            onDragEnd={(e) => setMarkerCoord(e.nativeEvent.coordinate)} 
            title="Placed Marker" 
          />
          //marker that can be placed by user
        )}
      </MapView>
    </View>
  );
}

//Stylesheet
const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
