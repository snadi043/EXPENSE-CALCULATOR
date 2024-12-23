import { StyleSheet,View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import {ExpenseList} from './ExpenseList';

function ExpenseOutput({expenses, period}){
    return (
        <View>
            <ExpenseSummary expense={expenses} expensesPeriod={period}/>
            <ExpenseList/>
        </View>
    );
}
export default ExpenseOutput;

const styles= StyleSheet.create({

})