import { Component } from "react";
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from "./Component/ExpenseList";
import "./App.css";
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      expense:[
        {id:1, charge: "렌트비", amount: 1600},
        {id:2, charge:"교통비", amount:400},
        {id:3, charge:"식비", amount:1200}
      ]
    }
  }
  //initialExpenses=[{id:1, charge: "렌트비", amount: 1600},{id:2, charge:"교통비", amount:400},{id:3, charge:"식비", amount:1200}]
  handleDelete = (id) =>{
    const arr=this.state.expense.filter(expense=>expense.id!==id)
    console.log(arr);
    this.setState({expense:arr});
  }
  render(){
    return(
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          <ExpenseForm/>
        </div>
        
        <div style={{width:'100%',backgroundColor:'white',padding:'1rem'}}>
          <ExpenseList 
          initialExpenses={this.state.expense}
          handleDelete={this.handleDelete}
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
}
export default App;