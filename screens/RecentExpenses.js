import {View, Text, StyleSheet} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expense-context';
import { day7DaysAgo } from '../utilities/date';

function RecentExpenses(){
    const expenseCtx = useContext(ExpenseContext);
    const recentExpense = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const sevenDaysAgo = day7DaysAgo(today, 7);
        return (expense.date >= sevenDaysAgo) && expense.date <= today;
    });

    return (<View>
        <Text>
            <ExpenseOutput period="Last 7 days" expenses={recentExpense} informationText="No recent expenses found in last 7 days."/>
        </Text>
    </View>)
}

export default RecentExpenses; 

const styles = StyleSheet.create({

})