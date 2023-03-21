import React from 'react'

export const Transaction = (props) => {
    const {expense, delExpense} = props
    const sign = expense.amount < 0 ? '-' : '+'
  return (
    <div>
        <li className={expense.amount < 0 ? 'minus' : 'plus'}>
        <p className='expense_title'>{expense.title}</p> 
        <h5 className='expense_amount'>{sign}{Math.abs(expense.amount)}</h5>
        <button className='delBtn' onClick={()=>delExpense(expense.id)}>X</button>
        </li>
    </div>
  )
}
