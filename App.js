import { StatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';

export default function App() {
  const [receivedData, setReceivedData] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const appName = "My app";

  const handleAlert = () => {
    Alert.alert("Dismiss the modal?", "Are you sure you want to dismiss the modal?", [
      {
        text: "cancel",
      },
      {
        text: "ok",
        onPress: () => setIsModalVisible(false),
      }
    ])
  }

  const handleInputData = (data) => {
    console.log("App ", data);
    setReceivedData(data);
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        <Button title="Add a Goal" onPress={() => setIsModalVisible(true)} />
      </View>
      <Input
        shouldAutoFocus={true}
        inputHandler={handleInputData}
        cancelHandler={handleAlert}
        isModalVisible={isModalVisible}
      />
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
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
    marginVertical: 5,
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomView: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",
  },
});
