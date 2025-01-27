import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
const ExpenseList=({handleDelete,initialExpenses})=> {
    //console.log(this.props.initialExpenses);
    return (
        <>
          <ul className='list'>
              {initialExpenses.map(expense =>
                  {
                    return(
                      <ExpenseItem 
                      key={expense.id} 
                      expense={expense}
                      handleDelete={handleDelete}
                      />
                    )
                  })
              }
          </ul>
          <button className='btn'>
              목록지우기
              <MdDelete className='btn-icon'/>
          </button>
        </>
    )
  }

export default ExpenseList