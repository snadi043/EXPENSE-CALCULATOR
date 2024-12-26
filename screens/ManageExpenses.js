import {View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

function ManageExpenses({route}){
    //making sure that expenseItemId is not null, then we check if Id is truthy or falsy.
    const editExpenseItemId = route.params?.expenseItemId;
    // the !! before a value can make it either truthy or false. It is javascript way do converting a value to a boolean.
    const isEditing = !!editExpenseItemId;

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        },
     [navigation, isEditing]);
    });
    
    return (<View>
        <Text>
        This is ManageExpenses Screen.
        </Text>
    </View>)
}

export default ManageExpenses;

const styles = StyleSheet.create({
    
})