import { Button, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

export default function GoalDetails({navigation, route}) {
  const [isWarning, setIsWarning] = useState(false);

  const handleWarning = () => {
    setIsWarning(true);
    navigation.setOptions({ title: "Warning!" });
  }

  useEffect(() => {
    navigation.setOptions({
      title: route.params ? route.params.goalObj.text : "More Details",
      headerRight: () => (
        <Button title="Warning" onPress={handleWarning} />
      )
    })
  }, [])

  const moreDetailsHandler = () => {
    navigation.push("Details");
  }
  
  return (
    <View>
      <Text style={{ color: isWarning ? "red" : "black" }}>
        {route.params ? `Details of ${route.params.goalObj.text} goal with ${route.params.goalObj.id}` : "More details"}
      </Text>
      <Button title="More Details" onPress={moreDetailsHandler} />
    </View>
  )
}

const styles = StyleSheet.create({})