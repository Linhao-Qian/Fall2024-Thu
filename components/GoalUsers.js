import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function GoalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`HTTP error happened with status ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("fetch users data ", err);
      }
    }
    fetchData();
  }, [])

  return (
    <View>
      <FlatList data={users} />
    </View>
  )
}

const styles = StyleSheet.create({})