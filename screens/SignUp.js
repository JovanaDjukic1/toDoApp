import { Text, View, TextInput, ImageBackground,StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ navigation }) {


  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        navigation.navigate("Tasks", { user: userCredential.user });
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

  return (
    <ImageBackground style={styles.imageContainer} source={require("../assets/notebook.jpg")}>
      <KeyboardAvoidingView 
        style={styles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[styles.lightText, styles.header]}>Sign Up</Text>
        <Text style={[styles.errorText]}>{validationMessage}</Text>
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Email' 
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Password' 
          placeholderTextColor="#BEBEBE" 
          secureTextEntry={true} 
          value={password} 
          onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} />
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Confirm Password' 
          placeholderTextColor="#BEBEBE" 
          secureTextEntry={true} 
          value={confirmPassword} 
          onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} />
        <View style={[styles.rowContainer, styles.topMargin]}>
          <Text style={styles.lightText}>Already have an account? </Text>
          <InlineTextButton text="Login" onPress={() => navigation.popToTop()} />
        </View>
        <Button title="Sign Up" onPress={signUp} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles=StyleSheet.create({
  imageContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    backgroundCover: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      opacity: 0.7,
      padding: 16
    },
    lightText: {
      color: "#fff"
    },
    header: {
      position:'absolute',
      top:20,
      fontSize: 20,
      alignSelf: "center",
      
    },
    errorText: {
      color: "red"
    },
    textInput: {
      alignSelf: 'stretch',
      padding: 8,
      borderBottomWidth: 2,
      marginVertical: 8
    },
    lightTextInput: {
      borderBottomColor: "#ffffff"
    },
    lightText: {
      color: "#fff"
    },
    topMargin: {
      marginTop: 16
    },
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
      marginVertical: 4,
      
    },
    welcome:{
      paddingTop:50,
      //marginTop: 300,
      //marginLeft: 70,
      fontSize: 50,
   },
   start:{
      // marginLeft:130,
      fontSize:20,
   },
})