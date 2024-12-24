import { StyleSheet, FlatList, Text } from "react-native";


function renderExpenseListItem(itemData){
    return <Text>{itemData.item.description}</Text>;
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

const styles= StyleSheet.create({
    
})