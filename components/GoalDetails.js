import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalDetails({navigation, route}) {
  const moreDetailsHandler = () => {
    navigation.push("Details");
  }
  
  return (
    <View>
      {route.params ? (
        <Text>
          Details of {route.params.goalObj.text} goal with {route.params.goalObj.id}
        </Text>
      ) : (
        <Text>More details</Text>
      )}
      <Button title="More Details" onPress={moreDetailsHandler} />
    </View>
  )
}

const styles = StyleSheet.create({})