import { Button, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import PressableButton from './PressableButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { updateInDB } from '../Firebase/firestoreHelper';
import GoalUsers from './GoalUsers';

export default function GoalDetails({navigation, route}) {
  const [isWarning, setIsWarning] = useState(false);
  const collectionName = "goals";

  const handleWarning = () => {
    setIsWarning(true);
    updateInDB({ warning: true }, route.params.goalObj.id, collectionName)
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
      {route.params && <GoalUsers id={route.params.goalObj.id} />}
    </View>
  )
}

const styles = StyleSheet.create({})