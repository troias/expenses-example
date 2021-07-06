import { useState } from "react"
import ExpenseList from './components/expense/ExpenseList/ExpenseList';
import './App.css';
import Card from './components//Ui/Card'
import NewExpense from './components/expense/NewExpense/NewExpense'

function App() {

  const expenses = [{
    date: new Date(2021, 2, 29),
    description: "expense 1",
    titles: "expense 1",
    amount: "12", 
    id: Math.random()
  },
  {
    date: new Date(2021, 2, 28),
    description: "expense 2",
    titles: "expense 2",
    amount: "13", 
    id: Math.random()
  }]

  const [expense, setExpense] = useState(
    expenses
  )

  const expenseHandler = (obj) => {
      
      // setExpense([obj, ...expenses])
      setExpense((prevState) => {
        return [obj, ...prevState]
      })
      console.log(obj)
    
  }
  console.log(expenses)

  return (
    <div className="App">
      <h2>Expenses</h2>
      <Card>
        <NewExpense expensehandler={expenseHandler}/>
        <ExpenseList expense={expense}  />
      </Card>

    </div>
  );
}

export default App;
