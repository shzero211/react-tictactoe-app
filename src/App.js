import { Component } from "react";
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from "./Component/ExpenseList";
import "./App.css";
class App extends Component{
  render(){
    return(
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          <ExpenseForm/>
        </div>
        
        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          <ExpenseList/>
        </div>
        
        <div style={{display:'flex',justifyContent:'end',marginTop: '1rem'}}>
          <p style={{fontSize:'2rem'}}>
            헬로
          </p>
        </div>
      </main>
    )
  }
}
export default App;