import { StyleSheet, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function Map({ navigation, route }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  function confirmHandler() {
    //navigate to Profile and pass selectedLocation as params
    navigation.navigate("Profile", { selectedLocation });
  }
  useEffect(() => {
    if (route.params && route.params.initialLocation) {
      setSelectedLocation(route.params.initialLocation);
    }
  }, []);
  return (
    <>
      <MapView
        onPress={(e) => {
          setSelectedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
        style={styles.map}
        initialRegion={{
          latitude: selectedLocation ? selectedLocation.latitude : 37.78825,
          longitude: selectedLocation ? selectedLocation.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <Button
        disabled={!selectedLocation}
        title="Confirm Selected Location"
        onPress={confirmHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({ map: { flex: 1 } });
