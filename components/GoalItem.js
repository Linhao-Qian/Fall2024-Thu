import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ item, deleteHandler }) {
  const handleDelete = () => {
    console.log("deleted");
    deleteHandler(item.id);
  };

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="X" color="grey" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "purple",
    fontSize: 30,
    padding: 5,
  },
});