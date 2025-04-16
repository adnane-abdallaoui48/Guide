import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Compte() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
            <Text style={styles.title}>Compte</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>Bienvenue dans votre compte !</Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
   title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
   
})