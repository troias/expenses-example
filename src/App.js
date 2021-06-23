import {useState} from "react"
import ExpenseList from './components/expense/ExpenseList/ExpenseList';
import './App.css';

function App() {

  const expenses = [{
    date: new Date(2021, 2, 28), 
    description: "testing",
    titles: "testing",
    amount: "12"
  },
  {
  date: new Date(2021, 2, 28), 
    description: "testing",
    titles: "testing",
    amount: "12"
  } ]
  const [expense, setExpense] = useState(
    expenses
  )





  return (
    <div className="App">
     <h2>Start</h2>
     <ExpenseList expense={expense}/>
    </div>
  );
}

export default App;
