import { View, Text, StyleSheet } from "react-native";

function ExpenseSummary({expense, expensesPeriod}){
    const expenseTotal = expense.reduce((sum, currentExpense) => { return sum + currentExpense.amount}, 0);
    return (
        <View>
            <Text>{expensesPeriod}</Text>
            <Text>${expenseTotal.toFixed(2)}</Text>
        </View>
    );
}
export default ExpenseSummary;

const styles= StyleSheet.create({
    
})