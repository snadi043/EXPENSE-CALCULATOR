import {View, Text, StyleSheet} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';

function AllExpenses(){
    return (<View>
        <Text>
            <ExpenseOutput period="Total"/>
        </Text>
    </View>)
}

export default AllExpenses;

const styles = StyleSheet.create({

})