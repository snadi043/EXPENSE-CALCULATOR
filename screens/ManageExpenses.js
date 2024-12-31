import { useContext, useLayoutEffect } from 'react';

import {View, StyleSheet} from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalColors } from '../constants/colors';
import { ExpenseContext } from '../store/expense-context';
import ManageExpenseForm from '../components/ManageExpenses/ManageExpenseForm';
import { storeExpense } from '../utilities/http';

function ManageExpenses({route, navigation}){
    const expenseCtx = useContext(ExpenseContext);

    //making sure that expenseItemId is not null, then we check if Id is truthy or falsy.
    const editExpenseItemId = route.params?.expenseItemId;
    // the !! before a value can make it either truthy or false. It is javascript way do converting a value to a boolean.
    const isEditing = !!editExpenseItemId;

    const updateExpense = expenseCtx.expenses.find((expense) => expense.id === editExpenseItemId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    },
     [navigation, isEditing]);

    function deleteItemHandler(){
        expenseCtx.deleteExpense(editExpenseItemId);
        navigation.goBack();
    }

    function cancelButtonHandler(){
        navigation.goBack();
    }

    function confirmButtonHandler(expenseData){
        if(isEditing){
            expenseCtx.updateExpense(editExpenseItemId, expenseData);
        }
        else{
            storeExpense(expenseData);
            expenseCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <ManageExpenseForm 
                onCancel={cancelButtonHandler} 
                submitHandlerLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmButtonHandler}
                defaultInputValues={updateExpense}
                />
            {isEditing && 
            (<View style={styles.deleteContainer}>
                <IconButton 
                    icon="trash" 
                    size={36} 
                    color={GlobalColors.colors.error500} 
                    onPress={deleteItemHandler}/>
            </View>
            )}
        </View>
        );
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
})