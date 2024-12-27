import {View, Text, StyleSheet} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpenseContext } from './store/expense-context';
import { day7DaysAgo } from '../utilities/date';

function RecentExpenses(){
    const expenseCtx = useContext(ExpenseContext);
    const recentExpense = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const sevenDaysAgo = day7DaysAgo(today, 7);
        return expense.date > sevenDaysAgo;
    });

    return (<View>
        <Text>
            <ExpenseOutput period="Last 7 days" expenses={recentExpense}/>
        </Text>
    </View>)
}

export default RecentExpenses; 

const styles = StyleSheet.create({

})