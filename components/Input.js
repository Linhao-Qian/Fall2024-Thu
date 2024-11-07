import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ImageManager from './ImageManager';

export default function Input({shouldAutoFocus, cancelHandler, inputHandler, isModalVisible}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(shouldAutoFocus);

  const handleConfirm = () => {
    setText("");
    inputHandler(text);
  }

  const handleCancel = () => {
    setText("");
    cancelHandler();
  }

  return (
    <Modal animationType="slide" visible={isModalVisible} transparent={true}>
      <View style={styles.container}>
        {/*
          Purpose of alt prop:
            A string that defines an alternative text description of the image,
            which will be read by the screen reader when the user interacts with it.
            Using this will automatically mark this element as accessible.
        */}
        <View style={styles.modalContainer}>
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png"}} style={styles.image} alt="network" />
          <Image source={require("../assets/archery.png")} style={styles.image} alt="local" />
          <TextInput
            placeholder="Type Something"
            keyboardType="default"
            style={styles.input}
            value={text}
            onChangeText={newText => setText(newText)}
            autoFocus={shouldAutoFocus}
            onFocus={() => {setIsFocused(true)}}
            onBlur={() => {setIsFocused(false)}}
          />
          <Text>{isFocused ? (text.length || "") : (text.length < 3 ? "Please type more than 3 characters" : "Thank you")}</Text>
          <ImageManager />
          <View style={styles.buttonGroups}>
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={handleCancel} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Confirm" onPress={handleConfirm} disabled={text.length < 3} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 5,
    color: "blue",
    marginTop: 10,
  },
  buttonGroups: {
    flexDirection: "row",
  },
  buttonContainer: {
    width: "30%",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  }
})