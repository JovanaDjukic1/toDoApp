import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform,StyleSheet } from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export default function Login({ navigation }) {
    //const background = require("../assets/notebook.jpg");
  
    if (auth.currentUser) {
      navigation.navigate("Tasks");
    } else {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate("Tasks");
        }
      });
    }
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }
  
    let [errorMessage, setErrorMessage] = React.useState("");
    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");
  
    let login = () => {
      if (email !== "" && password !== "") {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigation.navigate("Tasks", { user: userCredential.user });
            setErrorMessage("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            setErrorMessage(error.message)
          });
      } else {
        setErrorMessage("Please enter an email and password");
      }
    }
  
    return (
      <ImageBackground style={styles.imageContainer} source={require("../assets/notebook.jpg")}>
        <KeyboardAvoidingView 
          style={styles.backgroundCover} 
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={60}>
          <Text style={[styles.lightText, styles.header]}>Login</Text>
          <Text style={styles.errorText}>{errorMessage}</Text>
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
            onChangeText={setPassword} />
          <View style={[styles.rowContainer, styles.topMargin]}>
            <Text style={styles.lightText}>Don't have an account? </Text>
            <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
          </View>
          
          
          <Button title="Login" onPress={login} color="rgb(155,155,155)" />
        </KeyboardAvoidingView>

        <Text style={styles.welcome}>WELCOME</Text>
                <Text style={styles.start}>Start planning</Text>
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