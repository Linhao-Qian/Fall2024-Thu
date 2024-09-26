import { StatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
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
    let newGoal = {text: data , id: Math.random()};
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setIsModalVisible(false);
  }

  const handleGoalDelete = (deletedId) => {
    setGoals((prevGoals) => prevGoals.filter((goalObj) => goalObj.id != deletedId));
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
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          data={goals}
          renderItem={({item}) => <GoalItem item={item} deleteHandler={handleGoalDelete} />}
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {goals.map((goalObj) => (
            <View key={goalObj.id} style={styles.textContainer}>
              <Text style={styles.text}>{goalObj.text}</Text>
            </View>
          ))}
        </ScrollView> */}
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
  scrollViewContent: {
    alignItems: "center",
  },
  
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomView: {
    flex: 4,
    backgroundColor: "#dcd",
  },
});
