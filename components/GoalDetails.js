import { Button, StyleSheet, Text, View } from 'react-native'
import {useEffect} from 'react'

export default function GoalDetails({navigation, route}) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Warning" onPress={() => {console.log("warning")}} />
      )
    })
  }, [])

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