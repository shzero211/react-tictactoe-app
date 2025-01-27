import React, { Component } from 'react'
import './ExpenseForm.css'
import { MdSend } from 'react-icons/md'
const  ExpenseForm=({handleCharge,charge,amount,handleAmount,handleSummit})=>{
  return (
      <form>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor='charge'>지출 항목</label>
              <input 
                type="text" 
                className="form-control"
                id="charge" 
                name="charge"
                value={charge} 
                placeholder='예) 렌트비'
                onChange={handleCharge}
              />
              
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>비용 항목</label>
              <input 
              type='number'
              className='form-control' 
              id="amount" 
              name="amount"
              value={amount} 
              onChange={handleAmount}
              placeholder='예) 100'
              />
          </div>
      </div>
      <button className='btn' onClick={handleSummit}>
        제출
        <MdSend className='btn-icon'/>
      </button>
      </form>
    )
}
export default ExpenseForm