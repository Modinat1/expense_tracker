import React from "react"; 
import { ExpenseContext } from "./ExpenseContext";
import { ExpenseReducer } from "./ExpenseReducer";
import { useReducer } from "react";
import { ADD_EXPENSE, DELETE_EXPENSE } from "./ExpenseType";

const ExpenseState = ({children}) => {
    const initialState = {
      expenses: [
        // {id: 1, title: "fish", amount: -20},
        // {id: 2, title: "sales", amount: 30},
        // {id: 3, title: "shoes", amount: -40},
        // {id: 4, title: "sales", amount: 100},
        // {id: 5, title: "suya", amount: -20}
      ]
    }
    
    const [state, dispatch] = useReducer(ExpenseReducer, initialState)
    
    // setting expense into the localstorage
    localStorage.setItem("expenseDB", JSON.stringify([...state.expenses]))

    const addExpense = (expenseObj) => {
      const expenseData = localStorage.getItem("expenseDB")
      dispatch({type: ADD_EXPENSE, payload: expenseObj, expenseData})
    }

    const delExpense = (expenseId) => {
      dispatch({type: DELETE_EXPENSE, payload: expenseId})
    }
    
    return (
    <ExpenseContext.Provider 
    value={{
        expenses: state.expenses,
        addExpense,
        delExpense,
    }}
    >
        {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseState