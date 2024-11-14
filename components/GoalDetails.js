import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import PressableButton from "./PressableButton";
import { updateDB } from "../Firebase/firestoreHelper";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase/firebaseSetup";

export default function GoalDetails({ navigation, route }) {
  const [warning, setWarning] = useState(false);
  const [imageUri, setImageUri] = useState("");
  function warningHandler() {
    setWarning(true);
    navigation.setOptions({ title: "Warning!" });
    updateDB(route.params.goalObj.id, { warning: true }, "goals");
  }
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          // <Button title="Warning" color="white" onPress={warningHandler} />
          <PressableButton
            pressedFunction={warningHandler}
            componentStyle={{ backgroundColor: "purple" }}
          >
            <AntDesign name="warning" size={24} color="white" />
          </PressableButton>
        );
      },
    });
  }, []);
  useEffect(() => {
    async function getImageUri() {
      try {
        if (route.params?.goalObj.imageUri) {
          const imageRef = ref(storage, route.params.goalObj.imageUri);
          const httpsImageURi = await getDownloadURL(imageRef);
          setImageUri(httpsImageURi);
        }
      } catch (err) {
        console.log("get image ", err);
      }
    }
    getImageUri();
  }, []);
  return (
    <View>
      {route.params ? (
        <Text style={warning && styles.warningStyle}>
          Details of {route.params.goalObj.text} goal with
          {route.params.goalObj.id}
        </Text>
      ) : (
        <Text>More Details</Text>
      )}
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      {route.params && <GoalUsers goalId={route.params.goalObj.id} />}
      {imageUri && (
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
          alt="Image of the goal"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
  image: { width: 100, height: 100 },
});