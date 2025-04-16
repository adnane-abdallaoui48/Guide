import {ScrollView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";  
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    // const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const validateForm = () => {
      let isFormValid = true;
      if(username.trim() === ''){
        setErrors(prevState => {
          return [...prevState, "L'identifiant est obligatoire"]
        })
        isFormValid = false;
      }
      if (firstName.trim() === '') {
        setErrors(prevState => [...prevState, "Le nom est obligatoire."]);
        isFormValid = false;
      }
      if (lastName.trim() === '') {
        setErrors(prevState => [...prevState, "Le prénom est obligatoire."]);
        isFormValid = false;
      }
      if (email.trim() === '') {
        setErrors(prevState => [...prevState, "Veuillez entrer une adresse e-mail."]);
        isFormValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setErrors(prevState => [...prevState, "Format d'e-mail invalide."]);
        isFormValid = false;
      }
        if (password.trim() === '') {
          setErrors(prevState => [...prevState, "Veuillez choisir un mot de passe."]);
          isFormValid = false;
        } else if (password.length < 6) {
          setErrors(prevState => [...prevState, "Le mot de passe doit contenir au moins 6 caractères."]);
          isFormValid = false;
        }
        if (confirmPassword.trim() === '') {
          setErrors(prevState => [...prevState, "Veuillez confirmer votre mot de passe."]);
          isFormValid = false;
        } else if (password !== confirmPassword) {
          setErrors(prevState => [...prevState, "Les mots de passe ne sont pas identiques."]);
          isFormValid = false;
        }
        return isFormValid;
    }
    const submitForm = async () => {
      setErrors([]); 
      if (!validateForm()) {
        return; 
      }
    
      const userData = {
        username,
        firstName,
        lastName,
        email,
        password,
      };
    
      try {
        const response = await fetch("http://localhost:8083/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
    
        const data = await response.json();
        
        if (response.ok) {
          alert("Inscription réussie !");
          // navigation.navigate("SignIn"); // Redirection vers la connexion
        } else {
          setErrors([data.message || "Une erreur est survenue."]);
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        setErrors(["Impossible de contacter le serveur."]);
      }
    };
    
  
  return (
    <ScrollView contentContainerStyle = {styles.container} >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Inscrivez-vous</Text>
      <Text style={styles.subtitle}>Veuillez vous inscrire pour accéder à l'application.</Text>
      {errors.length > 0 && (
        <View style={styles.errorContainer}>
          {errors.map((error, index) => (
            <Text key={index} style={styles.errorText}>{error}</Text>
          ))}
        </View>)}
      <TextInput
        placeholder='Identifiant'
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Nom'
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder='Prénom'
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput 
              style={styles.input} 
              placeholder="Email" 
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
     <View style={styles.passwordContainer}>
             <TextInput 
               style={styles.passwordInput}
               placeholder="Mot de passe"
               secureTextEntry={!passwordVisible}
               value={password}
              onChangeText={setPassword}
             />
             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
               <Ionicons 
                 name={passwordVisible ? "eye-off" : "eye"} 
                 size={20} 
                 color="gray" 
               />
             </TouchableOpacity>
           </View>

           <View style={styles.passwordContainer}>
             <TextInput 
               style={styles.passwordInput}
               placeholder="Confirmez votre mot de passe"
               secureTextEntry={!passwordVisible}
               value={confirmPassword}
               onChangeText={setConfirmPassword}
             />
             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
               <Ionicons 
                 name={passwordVisible ? "eye-off" : "eye"} 
                 size={20} 
                 color="gray" 
               />
             </TouchableOpacity>
           </View>
           <TouchableOpacity style={styles.signUpButton} onPress={submitForm}>
                  <Text style={styles.signIUpText}>S'inscrire</Text>
            </TouchableOpacity>

            <Text style={styles.signInText} >
                  Vous avez déjà un compte ? <Text style={styles.signInLink} onPress={() => navigation.navigate("SignIn")}>Connectez-vous</Text>
              </Text>
            
            <Text style={styles.orText}>Ou connectez-vous avec</Text>
            <TouchableOpacity style={styles.socialIcons} >
              <FontAwesome name="google" size={24} color="#FFA500" />
              <Text>Continuer avec Google</Text>
             </TouchableOpacity>
    </ScrollView>
  )
}

export default SignUp;

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        marginTop : 25,
        flexGrow : 1,
        alignItems: "center",
        padding : 20
    },
    backButton : {
        alignSelf : "flex-start",
        marginBottom : 5,
        backgroundColor : "#F7F7F9",
        borderRadius : 50,
        padding : 10
    },
    title : {
      fontSize : 24,
      fontWeight : "bold",
      marginBottom : 10,
    },
    subtitle: {
      fontSize: 14,
      color: "gray",
      marginBottom: 20,
    },
    input : {
      width : "100%",
      height : 50,
      backgroundColor : "#F7F7F9",
      borderRadius : 10,
      paddingHorizontal : 15,
      marginBottom : 12
    }, 
    passwordContainer: {
      width: "100%",
      height: 50,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: "#F7F7F9",
      marginBottom : 12
    },
    passwordInput : {
      flex: 1,
    },
    signUpButton: {
      backgroundColor: "#FFA500",
      width: "100%",
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    signIUpText : {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    signInText : {
      marginTop: 15,
      fontSize: 14,
    },
    signInLink :{
      color: "#FFA500",
      fontWeight: "bold",
    },
    orText: {
      marginTop: 10,
      color: "gray",
    },
    socialIcons: {
      flexDirection: "row",
      padding : 15,
      width : "100%",
      borderRadius: 10,
      alignItems : "center",
      marginTop: 15,
      gap: 20,
      borderWidth : 1,
      borderColor : "#FFA500",
      justifyContent : "center"
    },
    errorContainer: {
      width: "100%",
      marginBottom: 12,
    },
    errorText: {
      color: "red",
      fontSize: 14,
    }

})