import {View, Text, StyleSheet} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpenseContext } from './store/expense-context';

function AllExpenses(){
    const expenseCtx = useContext(ExpenseContext);
    const allExpenses = expenseCtx.expenses;

    return (<View>
        <Text>
            <ExpenseOutput period="Total" expenses={allExpenses}/>
        </Text>
    </View>)
}

export default AllExpenses;

const styles = StyleSheet.create({

})