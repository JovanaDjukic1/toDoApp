import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground,Image } from 'react-native';


export default function Tasks({navigation}) {
    return(
        
        <View style={styles.container}>
            <Image source={require("../assets/notebookDown.jpg")} style={styles.image}></Image>
            <Text style={styles.organize}>Organize your tasks</Text>

               <TouchableOpacity onPress={() => {navigation.navigate("DayPlanner")}} style={styles.itemButton}>
                     <View>
                        <ImageBackground source={require("../assets/books.png")} style={styles.image1}>
                        <Text style={styles.itemTitle} navigation={navigation}>Day planner</Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {navigation.navigate("WeekPlanner")}} style={styles.itemButton1}>
                     <View>
                        <ImageBackground source={require("../assets/books.png")} style={styles.image1}>
                        <Text style={styles.itemTitle} navigation={navigation}>Week planner</Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {navigation.navigate("MonthPlanner")}} style={styles.itemButton2}>
                     <View>
                        <ImageBackground source={require("../assets/books.png")} style={styles.image1}>
                        <Text style={styles.itemTitle} navigation={navigation}>Month planner</Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {navigation.navigate("YearPlanner")}} style={styles.itemButton3}>
                     <View>
                        <ImageBackground source={require("../assets/books.png")} style={styles.image1}>
                        <Text style={styles.itemTitle} navigation={navigation}>Year planner</Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>



               <TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={styles.itemButton4}>
                     <View>
                        
                        <Text style={styles.itemTitle} navigation={navigation}>back</Text>
                        
                        </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => {navigation.navigate("Tasks")}} style={styles.itemButton5}>
                     <View>
                        <ImageBackground source={require("../assets/logoo1.png")} style={styles.image2}>
                        <Text style={styles.itemTitle} navigation={navigation}>Year planner</Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => {navigation.navigate("Manage")}} style={styles.itemButton6}>
                     <View>
                        <ImageBackground source={require("../assets/ac.webp")} style={styles.image2}>
                        <Text style={styles.itemTitle} navigation={navigation}>Year planner</Text>
                        </ImageBackground>
                        </View>
               </TouchableOpacity>


              

        
      </View>
      
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(155,155,155)',
    },
    organize:{
        position:'absolute',
        top:100,
        left: 30,
        fontSize:30,
        color:'white'
    },
    itemTitle: { fontSize:20, color: "rgb(35,35,35)", textAlign: 'center',marginTop:130 },
    itemTitle1: { fontSize: 15, padding: 5, color: "white", textAlign: 'center' },

    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 20,
        backgroundColor: "rgb(35,35,35)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        
    },
    image: {
        width:500,
    height: 280,
    opacity: 0.4,
    
      },
      image1:{
       height:170,
       width:170,
       borderRadius:30,
       overflow:'hidden'
      },
      image2:{
        height:30,
        width:30,
        borderRadius:5,
        overflow:'hidden'
       },
    
   
    itemButton:{
        position:'absolute',
        marginRight: 40,
        marginLeft: 10,
        marginTop: 230,
        //paddingTop: 20,
       // paddingBottom: 20,
        backgroundColor: 'rgb(155,155,155)',
        borderWidth: 2,
        borderColor: 'rgb(155,155,155)',
        borderRadius: 25
    },
    itemButton1:{
        position:'absolute',
        marginRight: 10,
        marginLeft: 200,
        marginTop: 230,
        //paddingTop: 20,
        //paddingBottom: 20,
        backgroundColor: 'rgb(155,155,155)',
        borderWidth: 2,
        borderColor: 'rgb(155,155,155)',
        borderRadius: 25
    
    },
    itemButton2:{
        position:'absolute',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 420,
        //paddingTop: 20,
        //paddingBottom: 20,
        backgroundColor: 'rgb(155,155,155)',
        borderWidth: 2,
        borderColor: 'rgb(155,155,155)',
        borderRadius: 25
    
    },
    itemButton3:{
        position:'absolute',
        marginRight: 10,
        marginLeft: 200,
        marginTop: 420,
        //paddingTop: 20,
        //paddingBottom: 20,
        backgroundColor: 'rgb(155,155,155)',
        borderWidth: 2,
        borderColor: 'rgb(155,155,155)',
        borderRadius: 25
    
    },
    itemButton4:{
        position:'absolute',
       marginTop:620,
       marginLeft:40,
       fontSize:20,
    },
    itemButton5:{
        position:'absolute',
        
       marginTop:750,
       marginLeft:180,
       
    },
    itemButton6:{
        position:'absolute',
        
       marginTop:750,
       marginLeft:320,
       
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
  });