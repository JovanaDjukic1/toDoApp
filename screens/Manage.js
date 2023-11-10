import { Button, View, TextInput, Text,TouchableOpacity,StyleSheet ,Image,ImageBackground} from 'react-native';
import React from 'react';
import { auth } from "../firebase";

import { signOut, updatePassword, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';

export default function Manage({ navigation }) {
  let [newPassword, setNewPassword] = React.useState("");
  let [currentPassword, setCurrentPassword] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  }

  let updateUserPassword = () => {
    signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updatePassword(user, newPassword).then(() => {
          setNewPassword("");
          setErrorMessage("");
          setCurrentPassword("");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TextInput 
          style={[styles.textInput, styles.darkTextInput]} 
          placeholder='Current Password'
          value={currentPassword}
          secureTextEntry={true}
          onChangeText={setCurrentPassword} />
      <TextInput 
          style={[styles.textInput, styles.darkTextInput]} 
          placeholder='New Password'
          value={newPassword}
          secureTextEntry={true}
          onChangeText={setNewPassword} />
      <Button color='rgb(135,135,135)' title="Update Password" onPress={updateUserPassword}/>
      <Button color='rgb(135,135,135)' title="Logout" onPress={logout} />
      <View style={styles.buttonStyles}>
      <TouchableOpacity onPress={() => {navigation.navigate("Tasks")}} style={styles.itemButton4}>
                     <View>
                        
                        <Text style={styles.itemTitle} navigation={navigation}>back</Text>
                        
                        </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => {navigation.navigate("Tasks")}} style={styles.itemButton5}>
                     <View>
                        <ImageBackground source={require("../assets/logoo1.png")} style={styles.image2}>
                        <Text style={styles.itemTitle} navigation={navigation}></Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => {navigation.navigate("Manage")}} style={styles.itemButton6}>
                     <View>
                        <ImageBackground source={require("../assets/ac.webp")} style={styles.image2}>
                        <Text style={styles.itemTitle} navigation={navigation}></Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>
               </View>
               <Image source={require("../assets/logoo1.png")} style={{width: 180, height: 180,marginLeft:0, marginTop:50}}></Image>
      
    </View>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor:"rgb(195,195,195)"
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
  darkTextInput: {
    borderBottomColor: "#000000"
  },
  buttonStyles:{
    position:'absolute',
    bottom:20
  },
  itemButton4:{
   bottom:-50,
   marginLeft:-120,
   fontSize:20,
  },
  itemTitle: { fontSize:50,
    color: "rgb(35,35,35)",
     textAlign: 'center',
     position:'absolute',
     marginTop:-115,
   marginLeft:20 
  },
  itemButton5:{
   left:-1,
   top:20
   
  },
  image2:{
    height:30,
    width:30,
    borderRadius:5,
    overflow:'hidden'
   },
   itemButton6:{
    top:-10,
    left:120,
    bottomMargin:150
   },
})
