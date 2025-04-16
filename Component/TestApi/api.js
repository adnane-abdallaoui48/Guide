import { Text, View } from 'react-native'
import React, { Component } from 'react'

const getStudents = () => {
    fetch('http://localhost:8087/api/v1/students')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

const data = {
    fullName : "Ali alaoui",
    major : "IA",
    phone : "0611603931",
    email : "ali.aaloui@ump.ac.ma"
}
// Exemple pour une requête POST
fetch('http://localhost:8087/api/v1/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// getStudents()
export default class Api extends Component {
  render() {
    return (
      <View>
        <Text>A</Text>
      </View>
    )
  }
}