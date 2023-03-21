// import ExpenseState from "./ExpenseState"
import { ADD_EXPENSE, DELETE_EXPENSE } from "./ExpenseType"

export const ExpenseReducer = (state, action) => {
    const {payload} = action
    const {expenses} = state
 
    switch(action.type){
        case ADD_EXPENSE:
        return{
            ...state,
            expenses: [...state.expenses, payload]
        }
        case DELETE_EXPENSE:
        return{
            ...state, 
            expenses: expenses.filter((expense) => expense.id !== payload)
        }
        default:
        return{
            state
        }
    }
}
