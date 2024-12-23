import { StyleSheet,View,Text } from "react-native";

function ExpenseSummary({expense, expensesPeriod}){
    const expense = expense.reduce((sum, currentExpense) => {sum + currentExpense.amount, 0});
    return (
        <View>
            <Text>{expensesPeriod}</Text>
            <Text>${expense}.toFixed(2)</Text>
        </View>
    );
}
export default ExpenseSummary;

const styles= StyleSheet.create({
    
})