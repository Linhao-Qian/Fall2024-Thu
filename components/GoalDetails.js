import { Button, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import PressableButton from './PressableButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
        <PressableButton pressedFunction={handleWarning} componentStyle={{backgroundColor: 'purple'}}>
          <MaterialIcons name="warning-amber" size={24} color="white" />
        </PressableButton>
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