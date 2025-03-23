import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
     setTimeout(() => {
       navigation.replace("SignIn");
     }, 5000);
   }, []);
 
   return (
     <View style={styles.container}>
       <Text style={styles.title}>Tjwall</Text>
     </View>
   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor : "#FFA500"
    },
    title: {
      fontSize: 34,
      fontWeight: "bold",
      fontFamily : "Verdana",
      color : "white"
    },
  });
export default HomeScreen;