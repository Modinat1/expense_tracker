import React, {useContext} from 'react'
import { ExpenseContext } from '../contexts/expenseContext/ExpenseContext'

export const Balance = () => {
  const {expenses} = useContext(ExpenseContext)

  const amounts = expenses.map((expense) => expense.amount )
  const totalAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <div className='balance'>
    <h4 className='tracker_subtitle'>Available Balance</h4>
    <h3>  &#8358;{totalAmount} </h3>
    </div>
  )
}
