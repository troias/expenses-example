import {useState} from "react"
import ExpenseList from './components/expense/ExpenseList/ExpenseList';
import './App.css';

function App() {

  const expenses = [{
    date: new Date(2021, 2, 29), 
    description: "expense 1",
    titles: "expense 1",
    amount: "12"
  },
  {
  date: new Date(2021, 2, 28), 
    description: "expense 2",
    titles: "expense 2",
    amount: "13"
  } ]
  const [expense, setExpense] = useState(
    expenses
  )

  return (
    <div className="App">
     <h2>Expenses</h2>
     <ExpenseList expense={expense}/>
    </div>
  );
}

export default App;
