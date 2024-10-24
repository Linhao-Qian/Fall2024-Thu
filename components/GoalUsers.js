import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { writeToDB } from '../Firebase/firestoreHelper';

export default function GoalUsers({id}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`HTTP error happened with status ${response.status}`);
        }
        const data = await response.json();
        data.forEach((user) => writeToDB(user, `goals/${id}/users`));
        setUsers(data.map(user => user.name));
      } catch (err) {
        console.error("fetch users data ", err);
      }
    }
    fetchData();
  }, [])

  return (
    <View>
      <FlatList data={users} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  )
}

const styles = StyleSheet.create({})