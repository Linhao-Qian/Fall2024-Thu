import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GoalItem({ goalObj, deleteHandler }) {
  const navigation = useNavigation();

  const handleDelete = () => {
    console.log("deleted");
    deleteHandler(goalObj.id);
  };

  const handlePress = () => {
    navigation.navigate("Details", { goalObj });
  }

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goalObj.text}</Text>
      <Button title="X" color="grey" onPress={handleDelete} />
      <Button title="i" color="grey" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "purple",
    fontSize: 30,
    padding: 5,
  },
});
