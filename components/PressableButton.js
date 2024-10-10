import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

export default function PressableButton({children, pressedFunction, componentStyle, pressedStyle}) {
  return (
    <Pressable
      onPress={pressedFunction}
      style={({pressed}) => [
        styles.defaultStyle,
        componentStyle,
        pressed && styles.defaultPressedStyle,
        pressed && pressedStyle
      ]}
    >
      <View>
        {children}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    defaultStyle: {
        backgroundColor: 'beige',
    },
    defaultPressedStyle: {
        backgroundColor: '#a4a',
        opacity: 0.2,
    }
});
