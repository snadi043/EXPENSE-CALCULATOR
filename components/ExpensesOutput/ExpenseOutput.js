import { StyleSheet,View, Text } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from './ExpenseList';
import { GlobalColors } from "../../constants/colors";

function ExpenseOutput({expenses, period, informationText}){
    let content = <Text style={styles.infoText}>{informationText}</Text>

    if(expenses.length > 0){
        content = <ExpenseList expenses={expenses}/>
    }
        return (
            <View style={styles.container}>
                <ExpenseSummary expense={expenses} expensesPeriod={period}/>
                {content}
            </View>
        );
    }
    
export default ExpenseOutput;

const styles= StyleSheet.create({
    infoText:{
        flex: 1,
        color: 'white',
        marginTop: 32,
        textAlign: 'center',
    },
    container:{
        flex: 1,
        backgroundColor: GlobalColors.colors.primary700,
        padding: 24,
    }
})