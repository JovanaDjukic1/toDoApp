import Login from './screens/Login';
import SignUp from './screens/SignUp';
import DayPlanner from './screens/DayPlanner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tasks from './screens/Tasks';
import WeekPlanner from './screens/WeekPlanner';
import MonthPlanner from './screens/MonthPlanner';
import YearPlanner from './screens/YearPlanner';
//import 'react-native-gesture-handler';
import Manage from './screens/Manage';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="Manage" component={Manage} options={{headerShown: false}} />
          <Stack.Screen name="DayPlanner" component={DayPlanner} options={{headerShown: false}} />
          <Stack.Screen name="Tasks" component={Tasks} options={{headerShown: false}} />
          <Stack.Screen name="WeekPlanner" component={WeekPlanner} options={{headerShown: false}} />
          <Stack.Screen name="MonthPlanner" component={MonthPlanner} options={{headerShown: false}} />
          <Stack.Screen name="YearPlanner" component={YearPlanner} options={{headerShown: false}} />
          
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}