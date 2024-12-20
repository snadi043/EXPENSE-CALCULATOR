import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function ExpenseOverview(){
    return <Tab.Navigator>
            <Tab.Screen name="RecentExpenses" component={RecentExpenses}/>
            <Tab.Screen name="AllExpenses" component={AllExpenses}/>
          </Tab.Navigator>
  }

  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="ExpenseOverview" component={ExpenseOverview}/>
              <Stack.Screen name="ManageExpenses" component={ManageExpenses}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
    );
  }

const styles = StyleSheet.create({
  
});
