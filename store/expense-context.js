import { createContext, useReducer } from "react";

//created an object as a skeleton for utilizing the context API using createContext hook and adding 
// all the expected information to help with auto completion while using them in the application.

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({description, date, amount}) => {},
    setExpense: (expense) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, date, amount}) => {}
});

// expenseReducer is the input that has to be seeded to the useReducer() hook 
// where the logic to the actions and data created in the expenseContext skeleton are described.

function expenseReducer(state, action){
    switch(action.type){
        //ADD logic is written under this case and this 
        // ADD type is linked to the dispatch type in the <ExpenseContext.Provider>

        case 'ADD':
        const id = new Date().toString() + Math.random().toString();
          return [{ ...action.payload, id: id}, ...state];
        
        //DELETE logic is written under this case and this 
        // DELETE type is linked to the dispatch type in the <ExpenseContext.Provider>

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);

        //UPDATE logic is written under this case and this 
        //UPDATE type is linked to the dispatch type in the <ExpenseContext.Provider>

        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data};
            const updatedExpense = [...state];
            updatedExpense[updatableExpenseIndex] = updatedItem;
            return updatedExpense;
        
        //SET_EXPENSE function to update the expense state when the expenses are fetched from the backend database
        case 'SET_EXPENSE':
            return action.payload;
        default:
            return state;
    }
}

//This is the main context provider function which is responsible to return the JSX element 
// which has the access to implement the context API in all over the application.


export default function ExpenseContextProvider({children}){

    // useReducer() is the hook responsible to manage the the state and used to dispatch the 
    // actions by taking the set of described action from the expenseReducer function from line 46. 

    // Dummy_expense is the initial state value which useReducer hooks expects before it runs for the first time.

    const [expenseState, dispatch] = useReducer(expenseReducer, []);
    
    // All the functions below are responsible to dispatch the particular actions based on the type 
    // and inject the payload into the state when the particular action is made.

    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData){
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    function setFetchedExpense(expense){
        dispatch({type: 'SET_EXPENSE', payload: expense});
    }

    // value object is an input that has to be seeded to the value prop 
    // on the Provider element to co-ordinate with the actions in the context API.

    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
        setFetchedExpense: setFetchedExpense,
    }

    return <ExpenseContext.Provider value={value}>
        {children}
    </ExpenseContext.Provider>
}