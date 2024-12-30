import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expense-context';

function AllExpenses(){
    const expenseCtx = useContext(ExpenseContext);
    const allExpenses = expenseCtx.expenses;

    return (
            <ExpenseOutput 
            period="Total" 
            expenses={allExpenses}
            informationText="No registered expenses found!"
            />
        )
}

export default AllExpenses;