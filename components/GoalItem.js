import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";

export default function GoalItem({ goalObj, deleteHandler }) {
  const navigation = useNavigation();

  return (
    <View style={styles.textContainer}>
      <Pressable
        android_ripple={{color: 'white', radius: 20}}
        style= {({pressed}) => [styles.horizontalContainer, pressed && styles.pressedStyle]}
        onPress={() => navigation.navigate("Details", { goalObj })}
      >
        <Text style={styles.text}>{goalObj.text}</Text>
        <PressableButton
          pressedFunction={() => deleteHandler(goalObj.id)}
          componentStyle={styles.deleteContainer}
          pressedStyle={styles.pressedStyle}
        >
          <Text style={styles.deleteButton}>X</Text>
        </PressableButton>
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
  horizontalContainer: {
    flexDirection: "row",
    alignItems: 'center',
  },
  pressedStyle: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
  text: {
    color: "purple",
    fontSize: 30,
    padding: 5,
  },
  deleteButton: {
    fontSize: 20,
    color: 'white',
  },
  deleteContainer: {
    backgroundColor: 'black',
  }
});
