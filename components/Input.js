import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Type Something"
        keyboardType="default"
        style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
        value={text}
        onChangeText={newText => setText(newText)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})