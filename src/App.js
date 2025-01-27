import { Component, useState } from "react";
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from "./Component/ExpenseList";
import "./App.css";
const App= () => {
  const [expenses,setExpenses]= useState([
        {id:1, charge: "렌트비", amount: 1600},
        {id:2, charge:"교통비", amount:400},
        {id:3, charge:"식비", amount:1200}
      ])

  //initialExpenses=[{id:1, charge: "렌트비", amount: 1600},{id:2, charge:"교통비", amount:400},{id:3, charge:"식비", amount:1200}]
  const handleDelete = (id) =>{
    const arr=expenses.filter(expense=>expense.id!==id)
    console.log(arr);
    setExpenses(arr);
  }

    return(
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          <ExpenseForm/>
        </div>
        
        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          <ExpenseList 
          initialExpenses={expenses}
          handleDelete={handleDelete}
          />
        </div>
        
        <div style={{display:'flex',justifyContent:'end',marginTop: '1rem'}}>
          <p style={{fontSize:'2rem'}}>
            헬로
          </p>
        </div>
      </main>
    )
}
export default App;