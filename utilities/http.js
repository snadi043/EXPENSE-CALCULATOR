import axios from "axios";

// reusable application URL to access the backend database.
const EXPENSE_TRACKER_BACKEND_URL =  'https://react-native-expensecalculator-default-rtdb.firebaseio.com';

// "expenses" will be the directory to store this data in the database 
// .json is the expected format that firebase expects the data that has to be in the database.

// REST API - POST METHOD TO ADD THE NEW EXPENSE TO THE BACKEND DATABASE.
//async and await is the procedure that has to be applied as the POST method expects a Promise and these methods implement them easily.
//"expenseData" is the parameter which we expect from this API when called from the UI to the backend database.
export async function storeExpense(expenseData){
    const response = await axios.post( EXPENSE_TRACKER_BACKEND_URL + '/expenses.json', expenseData);
    return response;

}

// REST API - GET METHOD TO FETCH ALL THE EXPENSE FROM THE BACKEND DATABASE.
//async and await is the procedure that has to be applied as the GET method expects a Promise and these methods implement them easily.

export async function getExpenses(){
   const response =  axios.get(EXPENSE_TRACKER_BACKEND_URL + '/expenses.json');

   const expenses = [];

   for(const key in response.data){
    console.log(response.data);
    const editedExpenseObj = {
        id: key,
        amount: expenses.data[key].amount,
        date: new Date(expenses.data[key].date),
        description: expenses.data[key].description,
    }
    expenses.push(editedExpenseObj);
   }
   return expenses;
}