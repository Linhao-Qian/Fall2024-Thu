import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';

export default function App() {
  const [receivedData, setReceivedData] = useState("");
  const appName = "My app";

  const handleInputData = (data) => {
    console.log("App ", data);
    setReceivedData(data);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} />
      <Input shouldAutoFocus={true} inputHandler={handleInputData} />
      <Text>{receivedData}</Text>
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
