import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";  
import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SignIn() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  return (
    <ScrollView contentContainerStyle={styles.container} >

      <Text style={styles.title}>Connectez-vous</Text>
      <Text style={styles.subtitle}>Veuillez vous identifier pour accéder à l'application</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput}
          placeholder="Mot de passe"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons 
            name={passwordVisible ? "eye-off" : "eye"} 
            size={20} 
            color="gray" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPasswordEnd}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Se connecter</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
      Vous n’avez pas de compte ? <Text style={styles.signUpLink} onPress={() => navigation.navigate("SignUp")}>Inscrivez-vous</Text>
      </Text>

      <Text style={styles.orText}>Ou connectez-vous avec</Text>

      

      <TouchableOpacity style={styles.socialIcons}>
        <FontAwesome name="google" size={24} color="#FFA500" />
        <Text>Continuer avec Google</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    marginTop : 56
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop : 50
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 24,
    backgroundColor: "#f9f9f9",
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    marginBottom : 16
  },
  passwordInput: {
    flex: 1,
  },
  forgotPassword: {
    color: "#FFA500",
    marginBottom: 25,
    
  },
  forgotPasswordEnd : {
    alignSelf: "flex-end",
  },
  signInButton: {
    backgroundColor: "#FFA500",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpText: {
    marginTop: 30,
    fontSize: 14,
  },
  signUpLink: {
    color: "#FFA500",
    fontWeight: "bold",
  },
  orText: {
    marginTop: 15,
    color: "gray",
  },
  socialIcons: {
    flexDirection: "row",
    padding : 15,
    width : "100%",
    borderRadius: 10,
    alignItems : "center",
    marginTop: 30,
    gap: 20,
    borderWidth : 1,
    borderColor : "#FFA500",
    justifyContent : "center"
  },
});
