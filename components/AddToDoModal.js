import { View, Text, TextInput, Button,Image,TouchableOpacity,ImageBackground,StyleSheet } from 'react-native';
import React from 'react';

export default function AddToDoModal(props) {
  let [todo, setTodo] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add ToDo</Text>
      <TextInput 
          style={[styles.textInput, styles.darkTextInput]} 
          placeholder='ToDo'
          value={todo}
          onChangeText={setTodo} />
      <View style={[styles.rowContainer, styles.rightAligned, styles.rightMargin]}>
        <Button title="Cancel" onPress={props.onClose} color='rgb(155,155,155)'/>
        <Button title="OK" onPress={() => {
          props.addToDo(todo);
          setTodo("");
          props.onClose();
        }} color='rgb(155,155,155)'/>
      </View>
      
      <Image source={require("../assets/logoo1.png")} style={{width: 180, height: 180,marginLeft:0, marginTop:250}}></Image>
    </View>
  );
  
}
const styles=StyleSheet.create({
    itemButton5:{
        position:'absolute',
        top:100,
       marginLeft:135,
    },
    image2:{
        height:30,
        width:30,
        borderRadius:5,
        overflow:'hidden'
       },
       container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor:"rgb(195,195,195)"
      },
      header: {
        position:'absolute',
        top:20,
        fontSize: 20,
        alignSelf: "center",
        
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
      rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        marginVertical: 4,
        
      },
      rightAligned: {
        justifyContent: "flex-end"
      },
      rightMargin: {
        marginRight: 16
      },

})