import React, {useContext, useState} from 'react'
import { AddExpenseBtn } from './AddExpenseBtn'
import { ExpenseContext } from '../contexts/expenseContext/ExpenseContext'

export const AddNewExpense = () => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const {addExpense} = useContext(ExpenseContext)

 
  const addNewExpense =(e) =>{
    e.preventDefault();
     const newExpense= {
    id: crypto.randomUUID(),
    title: title,
    amount: Number(amount)
  }
  addExpense(newExpense)
  localStorage.setItem("expenseDB", JSON.stringify(newExpense))
  setTitle("")
  setAmount("")
  }
  return (
    <div className='add_new_expense'>
      <h4 className='tracker_subtitle'>Add New Expense</h4>

      <form onSubmit={addNewExpense}>
      <label htmlFor="expenseTitle"> Title </label>
      <input type="text" value={title} onChange= {(e) => setTitle(e.target.value)} name='expenseTitle' placeholder='new expense title' />

      <label htmlFor="expenseAmount">Amount</label>
      <small>(+amount = credit, -amount = debit)</small>
      <input type="number" value={amount} onChange= {(e) => setAmount(e.target.value)} name='expenseAmount' placeholder='expense amount' />

      <AddExpenseBtn/>

      </form>
      </div>
  )
}
