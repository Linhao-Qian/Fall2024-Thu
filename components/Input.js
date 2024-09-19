import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input({shouldAutoFocus}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(shouldAutoFocus);

  const handleConfirm = () => {
    console.log(text)
  }

  return (
    <View>
      <TextInput
        placeholder="Type Something"
        keyboardType="default"
        style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
        value={text}
        onChangeText={newText => setText(newText)}
        autoFocus={shouldAutoFocus}
        onFocus={() => {setIsFocused(true)}}
        onBlur={() => {setIsFocused(false)}}
      />
      <Text>{isFocused ? (text.length || "") : (text.length < 3 ? "Please type more than 3 characters" : "Thank you")}</Text>
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  )
}

const styles = StyleSheet.create({})