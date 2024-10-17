import { StatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './Header';
import Input from './Input';
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { writeToDB } from "../Firebase/firestoreHelper";

export default function Home({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const appName = "My app";
  const collectionName = "goals";

  const handleAlert = () => {
    Alert.alert(
      "Dismiss the modal?",
      "Are you sure you want to dismiss the modal?",
      [
        {
          text: "cancel",
        },
        {
          text: "ok",
          onPress: () => setIsModalVisible(false),
        },
      ]
    );
  };

  const handleInputData = (data) => {
    console.log("App ", data);
    let newGoal = { text: data };
    writeToDB(newGoal, collectionName);
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setIsModalVisible(false);
  };

  const handleGoalDelete = (deletedId) => {
    setGoals((prevGoals) =>
      prevGoals.filter((goalObj) => goalObj.id != deletedId)
    );
  };

  const handleDeleteAllAlert = () => {
    Alert.alert("Delete all?", "Are you sure you want to delete all goals?", [
      {
        text: "no",
      },
      {
        text: "yes",
        onPress: () => setGoals([]),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        <PressableButton
          pressedFunction={() => setIsModalVisible(true)}
          componentStyle={{backgroundColor: 'purple'}}
        >
          <Text style={styles.buttonText}>Add a Goal</Text>
        </PressableButton>
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
          renderItem={({ item, separators }) => (
            <GoalItem
              goalObj={item}
              deleteHandler={handleGoalDelete}
              highlight={separators.highlight}
              unhighlight={separators.unhighlight}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.listText}>No goals to show</Text>
          }
          ListHeaderComponent={
            goals.length > 0 && <Text style={styles.listText}>My goals</Text>
          }
          ListFooterComponent={
            goals.length > 0 && (
              <View style={styles.footer}>
                <Button title="Delete All" onPress={handleDeleteAllAlert} />
              </View>
            )
          }
          ItemSeparatorComponent={({highlighted}) => 
            <View style={[styles.separatorLine, highlighted && {backgroundColor: 'purple'}]} />
          }
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
  listText: {
    color: "purple",
    fontSize: 20,
    margin: 5,
  },
  footer: {
    marginTop: 15,
  },
  separatorLine: {
    flex: 0,
    marginTop: 15,
    marginBottom: 10,
    height: 5,
    backgroundColor: "#777",
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    padding: 5
  }
});
