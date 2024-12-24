import { StyleSheet,View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from './ExpenseList';

function ExpenseOutput({expense, period}){
    const Dummy_expense = [
        {
            id: 'e1',
            description: 'Iphone 16 Pro',
            amount: 1699.99,
            data: new Date('2024-07-14'),
        },
        {
            id: 'e2',
            description: 'Bus Pass',
            amount: 16.00,
            data: new Date('2024-03-09'),
        },
        {
            id: 'e3',
            description: 'Credit Card Bill',
            amount: 199.89,
            data: new Date('2024-05-29'),
        },
        {
            id: 'e4',
            description: 'Christmas Shopping',
            amount: 649.30,
            data: new Date('2024-12-14'),
        },
        {
            id: 'e5',
            description: 'Buss Pass',
            amount: 1699.99,
            data: new Date('2024-12-05'),
        }
    ]
    return (
        <View>
            <ExpenseSummary expense={Dummy_expense} expensesPeriod={period}/>
            <ExpenseList expenses={Dummy_expense}/>
        </View>
    );
}
export default ExpenseOutput;

const styles= StyleSheet.create({

})