import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../contexts/expenseContext/ExpenseContext'
import { Transaction } from './Transaction'

export const ExpenseHistory = () => {
  const {expenses, delExpense} = useContext(ExpenseContext)
  return (
    <div className='history_container'>
    <h4 className='tracker_subtitle'>Expense History</h4>
    <ul className='expense_history_list'>
      {expenses.map((expense) => <Transaction key={expense.id} expense= {expense} delExpense={delExpense}/> )}
    </ul>
    </div>
  )
}
