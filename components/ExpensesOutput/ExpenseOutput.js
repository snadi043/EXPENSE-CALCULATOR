import { StyleSheet,View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import {ExpenseList} from './ExpenseList';

function ExpenseOutput({expenses}){
    return (
        <View>
            <ExpenseSummary/>
            <ExpenseList/>
        </View>
    );
}
export default ExpenseOutput;

const styles= StyleSheet.create({

})