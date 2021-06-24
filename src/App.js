import { useState } from "react"
import ExpenseList from './components/expense/ExpenseList/ExpenseList';
import './App.css';
import Card from './components//Ui/Card'

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

  const titleHandler = () => {
      // console.log(expenses[0].titles)
      // setExpense({...expenses, titles: 1})
  }

  return (
    <div className="App">
      <h2>Expenses</h2>
      <Card>
        <ExpenseList expense={expense} title={titleHandler} />
      </Card>

    </div>
  );
}

export default App;
