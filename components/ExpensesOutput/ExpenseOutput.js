import { StyleSheet,View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from './ExpenseList';
import { GlobalColors } from "../../constants/colors";

function ExpenseOutput({expenses, period}){
    
    return (
        <View style={styles.container}>
            <ExpenseSummary expense={expenses} expensesPeriod={period}/>
            <ExpenseList expenses={expenses}/>
        </View>
    );
}
export default ExpenseOutput;

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: GlobalColors.colors.primary700,
        padding: 24,
    }
})