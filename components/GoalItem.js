import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GoalItem({ goalObj, deleteHandler }) {
  const navigation = useNavigation();

  const handleDelete = () => {
    console.log("deleted");
    deleteHandler(goalObj.id);
  };

  return (
    <View style={styles.textContainer}>
      <Pressable
        android_ripple={{color: 'lightblue', radius: 100}}
        style= {styles.horizontalStyle}
        onPress={() => navigation.navigate("Details", { goalObj })}
      >
        <Text style={styles.text}>{goalObj.text}</Text>
        <Button title="X" color="grey" onPress={handleDelete} />
      </Pressable>
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
  horizontalStyle: {
    flexDirection: "row",
    alignItems: 'center',
  },
  text: {
    color: "purple",
    fontSize: 30,
    padding: 5,
  },
});
