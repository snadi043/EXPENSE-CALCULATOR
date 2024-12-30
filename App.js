import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from './screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalColors } from './constants/colors';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';

import ExpenseContextProvider from './store/expense-context';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function ExpenseOverview(){
    return <Tab.Navigator screenOptions={
      ({navigation}) => ({
        headerStyle: {backgroundColor: GlobalColors.colors.primary500},
        headerTintColor: 'white',
        tabBarActiveTintColor: GlobalColors.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalColors.colors.primary500,
          },
        headerRight: ({tintColor}) => (
        <IconButton icon="add" size={24} color={tintColor} onPress={() => {
          navigation.navigate('ManageExpenses');
        }}/>
        ), 
    })
    }>
            <Tab.Screen 
              name="RecentExpenses" 
              component={RecentExpenses}
              options={{
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({size, color}) => <Ionicons name="hourglass" size={size} color={color} onPress={() => {}}/>
              }}
              />
            <Tab.Screen 
              name="AllExpenses" 
              component={AllExpenses}
              options={{
                title: 'All Expenses',
                tabBarLabel: 'All Expenses',
                tabBarIcon: ({size, color}) => <Ionicons name="calendar" size={size} color={color} />
              }}
              />
          </Tab.Navigator>
  }

  return (
    <>
      <StatusBar style="light"/>
      <ExpenseContextProvider>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: GlobalColors.colors.primary500}
            }
            }>
              <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} options={{headerShown: false}}/>
              <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{
                presentation: 'modal',
              }}/>
            </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
    );
  }

const styles = StyleSheet.create({
  
});
