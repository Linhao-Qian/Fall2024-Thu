import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

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
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.container}>
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
        <View style={styles.buttonGroups}>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={handleCancel} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 5,
    color: "blue",
  },
  buttonGroups: {
    flexDirection: "row",
    gap: 16,
  },
  buttonContainer: {
    width: "30%",
    marginVertical: 5,
  }
})