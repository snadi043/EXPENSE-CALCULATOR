import {View, Text, StyleSheet} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';

function RecentExpenses(){
    return (<View>
        <Text>
            <ExpenseOutput period="Last 7 days"/>
        </Text>
    </View>)
}

export default RecentExpenses;

const styles = StyleSheet.create({

})