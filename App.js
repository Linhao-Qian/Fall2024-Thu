import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';

export default function App() {
  const [receivedData, setReceivedData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const appName = "My app";

  const handleInputData = (data) => {
    console.log("App ", data);
    setReceivedData(data);
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        <Button title="Add a Goal" onPress={() => setModalVisible(true)} />
      </View>
      <Input shouldAutoFocus={true} inputHandler={handleInputData} isModalVisible={modalVisible} />
      <View style={styles.bottomView}>
        <Text style={styles.text}>{receivedData}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
    marginVertical: 5,
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
  },
});
