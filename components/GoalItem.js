import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({item}) {
  return (
    <View key={item.id} style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginTop: 5,
  },
  text: {
    color: "purple",
    fontSize: 50,
    padding: 50,
  },
});
