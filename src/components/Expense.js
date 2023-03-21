import React, {useContext} from 'react'
import { ExpenseContext } from '../contexts/expenseContext/ExpenseContext'

export const Expense = () => {
  const {expenses} =useContext(ExpenseContext)
  const amounts = expenses.map(expense => expense.amount)

  const credit = amounts
  .filter(expense => expense > 0)
  .reduce((acc, expense) => (acc +=expense), 0)
  .toFixed(2)

  const debit = amounts
  .filter(expense => expense < 0)
  .reduce((acc, expense) => (acc +=expense), 0)
  .toFixed(2)

  return (
    <div className='expense'>
      
        <div className='credit'>
            <h4>CREDIT</h4>
            <h3>{credit}</h3>
        </div>

        <div className='debit'>
            <h4>DEBIT</h4>
            <h3>{debit}</h3>
        </div>
    </div>
  )
}
