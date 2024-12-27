import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalColors } from '../constants/colors';
import Button from '../components/UI/Button';
import { ExpenseContext } from './store/expense-context';

function ManageExpenses({route}){
    const expenseCtx = useContext(ExpenseContext);

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

    function deleteItemHandler(){
        expenseCtx.deleteExpense(editExpenseItemId);
        navigation.goBack();
    }

    function cancelButtonHandler(){
        navigation.goBack();
    }

    function confirmButtonHandler(){
        if(isEditing){
            expenseCtx.updateExpense(editExpenseItemId, {
                description: 'UPDATED_EXPENSE',
                amount: 35.55,
                date: new Date('2024-12-01'),
            }
            );
        }
        else{
            expenseCtx.addExpense({
                description: 'ADD_ITEM',
                amount: 25.99,
                date: new Date('2024-12-27'),
            });
        }
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode="flat" onPress={cancelButtonHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmButtonHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {
                isEditing && 
            <View style={styles.deleteContainer}>
                <IconButton icon="trash" size={36} color={GlobalColors.colors.error500} onPress={deleteItemHandler}/>
            </View>
            }
        </View>
        )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: GlobalColors.colors.primary800,
        padding: 24,
    },
    deleteContainer:{
        borderTopColor: GlobalColors.colors.primary100,
        borderTopWidth: 2,
        marginTop: 8,
        paddingTop: 10,
        alignItems:'center',
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        marginHorizontal: 8,
        minWidth: 120,

    }
})