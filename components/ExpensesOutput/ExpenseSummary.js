import { View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../../constants/colors";

function ExpenseSummary({expense, expensesPeriod}){
    const expenseTotal = expense.reduce((sum, currentExpense) => { return sum + currentExpense.amount}, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.period}>{expensesPeriod}</Text>
            <Text style={styles.total}>${expenseTotal}</Text>
        </View>
    );
}
export default ExpenseSummary;

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: GlobalColors.colors.primary50,
        alignItems: 'center',
        borderRadius: 6,
        padding: 12,
        width: '100%'
    },
    period:{
        fontSize: 12,
        color: GlobalColors.colors.primary500,
    },
    total:{
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalColors.colors.primary700,
    }
})