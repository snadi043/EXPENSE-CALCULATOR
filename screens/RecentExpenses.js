import {View, Text} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpenseOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../store/expense-context';
import { day7DaysAgo } from '../utilities/date';

import { getExpenses } from '../utilities/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenses(){
    const expenseCtx = useContext(ExpenseContext);

    const [isFetching, setIsFetching] = useState(true);

    const [error, setError] = useState();

    // const [fetchedExpenses, setFetchedExpenses] = useState([]);

    // useEffect() itself cannot be an asynchronous function so a work around is we create fetchExpenses() function and call our getExpense API 
    // and update the state with setFetchedExpense Function and passing the result "expense" and making this fetchExpenses() as async and await.
    // So, with this way useEffect can re-render the component and the fetched results can be displayed on the screen.

    // if we are using the state and managing the fetchedExpenses with the state we have to do multiple http calls whenever a new expense is added and to it has to be fetched to update the expense list in the UI.
    // To overcome this, we can reutilize our contextAPI state management library where we can add new function to setState() and call it on the GET API METHOD, so that what ever the user enters in the form will 
    // be updated in the screen without making additional HTTP calls to fetch the updated expenses from the backend database.

    // refer to the expense-context.js file to understand the new setState function.

    useEffect(() => {
        async function fetchExpenses(){
            setIsFetching(true);
            try{
                const expense = await getExpenses();
                expenseCtx.setFetchedExpense(expense);
            }
            catch(error){
                setError('Could not fetch expenses!');
            }
            setIsFetching(false);
        }
        fetchExpenses();
    }, []);

    const recentExpense = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const sevenDaysAgo = day7DaysAgo(today, 7);
        return (expense.date >= sevenDaysAgo) && expense.date <= today;
    });

    function errorHandler(){
        setError(null);
    }

    if (isFetching){
        return <LoadingOverlay />
    }

    if(error && !isFetching){
        return <ErrorOverlay 
        message={error}
        onConfirm={errorHandler}
        />
    }

    return (<View>
        <Text>
            <ExpenseOutput period="Last 7 days" expenses={recentExpense} informationText="No recent expenses found in last 7 days."/>
        </Text>
    </View>)
}

export default RecentExpenses; 
