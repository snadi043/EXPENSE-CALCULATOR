import {FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";


function renderExpenseListItem(itemData){
    return <ExpenseItem {...itemData.item}/>
}
function ExpenseList({expenses}){
    return (
       <FlatList
        keyExtractor={(item) => item.id} 
        data={expenses}
        renderItem={renderExpenseListItem}
        />
    );
}
export default ExpenseList;
