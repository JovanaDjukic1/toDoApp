import { View, Button, Text, Modal, SafeAreaView, ActivityIndicator, FlatList,Image,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import { auth, db } from "../firebase";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"; 
import React from 'react';
import AddToDoModal from '../components/AddToDoModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function WeekPlanner({ navigation }) {
  let [modalVisible, setModalVisible] = React.useState(false);
  let [isLoading, setIsLoading] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [toDos, setToDos] = React.useState([]);

  let loadToDoList = async () => {
    const q = query(collection(db, "todosWeek"), where("userId", "==", auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    let toDos = [];
    querySnapshot.forEach((doc) => {
      let toDo = doc.data();
      toDo.id = doc.id;
      toDos.push(toDo);
    });

    setToDos(toDos);
    setIsLoading(false);
    setIsRefreshing(false);
  };

  if (isLoading) {
    loadToDoList();
  }

  let checkToDoItem = (item, isChecked) => {
    const toDoRef = doc(db, 'todosWeek', item.id);
    setDoc(toDoRef, { completed: isChecked }, { merge: true });
  };

  let deleteToDo = async (toDoId) => {
    await deleteDoc(doc(db, "todosWeek", toDoId));
    let updatedToDos = [...toDos].filter((item) => item.id != toDoId);
    setToDos(updatedToDos);
  };

  let renderToDoItem = ({item}) => {
    return (
      <View style={[styles.rowContainer, styles.rightMargin, styles.leftMargin]}>
        <View style={styles.fillSpace}>
          <BouncyCheckbox
            isChecked={item.complated}
            size={25}
            fillColor="#258ea6"
            unfillColor="#FFFFFF"
            text={item.text}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => { checkToDoItem(item, isChecked)}}
          />
        </View>
        <InlineTextButton text="Delete" color="#258ea6" onPress={() => deleteToDo(item.id)} />
      </View>
    );
  }

  let showToDoList = () => {
    return (
      <FlatList
        data={toDos}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadToDoList();
          setIsRefreshing(true);
        }}
        renderItem={renderToDoItem}
        keyExtractor={item => item.id} />
    )
  };

  let showContent = () => {
    return (
      <View>
        {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
        <Button 
          title="Add ToDo" 
          onPress={() => setModalVisible(true) } 
          color="rgb(155,155,155)" />
      </View>
    );
  };

  

  let addToDo = async (todo) => {
    let toDoToSave = {
      text: todo,
      completed: false,
      userId: auth.currentUser.uid
    };
    const docRef = await addDoc(collection(db, "todosWeek"), toDoToSave);

    toDoToSave.id = docRef.id;

    let updatedToDos = [...toDos];
    updatedToDos.push(toDoToSave);

    setToDos(updatedToDos);
  };
  
  return (
    <View style={styles.homeContainer}>
    <Image source={require("../assets/notebookDown.jpg")} style={{ height: 150,width:700,marginLeft:-250, marginTop:50}}></Image>
    <Text style={styles.day}>Week Planner</Text>
    <TouchableOpacity onPress={() => {navigation.navigate("Tasks")}} style={styles.itemButton4} >
                     <View>
                        
                        <Text style={styles.itemTitle} navigation={navigation}>-</Text>
                        </View>
                        
               </TouchableOpacity>
    <SafeAreaView style={styles.homeContainer}>
        
      <View style={[styles.rowContainer, styles.rightAligned, styles.rightMargin, styles.topMargin]}>
      
        
        
      </View>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <AddToDoModal 
          onClose={() => setModalVisible(false)}
          addToDo={addToDo} />
      </Modal>
      
      <Text style={styles.header}></Text>
      
      {showContent()}
      
    </SafeAreaView>
    <Image source={require("../assets/notebook.jpg")} style={styles.imageToDo}></Image>

    
      
    </View>
    
  )
}

const styles=StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
    
  },
  rightMargin: {
    marginRight: 16
  },
  leftMargin: {
    marginLeft: 16
  },
  fillSpace: {
    flex: 1
  },
  day:{
    position:'absolute',
    top:100,
    left:100,
    fontSize:30,
    color:'rgb(35,35,35)'
  },
  itemButton4:{
    //position:'absolute',
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
  homeContainer:{
    backgroundColor:"rgb(207,204,203)"
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
  topMargin: {
    marginTop: 16
  },
  rightMargin: {
    marginRight: 16
  },
  header: {
    position:'absolute',
    top:20,
    fontSize: 20,
    alignSelf: "center",
    
  },
  imageToDo:{
    //width:385,
    height:715,
    marginTop:0,
    opacity:0.6,
    marginLeft:-200
   },
})