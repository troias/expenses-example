import { useState } from "react"
import ExpenseList from "./components/expense/ExpenseList/ExpenseList"
import "./App.css"
import Card from "./components//Ui/Card"
import NewExpense from "./components/expense/NewExpense/NewExpense"

function App() {
  const expenses = [
    {
      date: new Date(2021, 2, 29),
      description: "Decidant Pizza",
      title: "expense 1",
      amount: 13,
      id: Math.random(),
    },
    {
      date: new Date(2021, 2, 28),
      description: "Margarita pizza",
      title: "expense 2",
      amount: 20,
      id: Math.random(),
    },
  ]

  const [expense, setExpense] = useState(expenses)

  const expenseHandler = (obj) => {
    setExpense((prevState) => {
      return [obj, ...prevState]
    })
    console.log("expenseHandler", expenseHandler)
  }

  const deleteHandler = (id) => {
    setExpense((prevState) => {
      return prevState.filter((expenseItem) => {
        return expenseItem.id !== id
      })
    })
  }

  const titleHandler = (id) => {
    const expenseCopy = [...expense]

    expenseCopy.map((expense) => id === expense.id && (expense.title = "Pizza"))

    setExpense((expenseCopy) => {
      return [...expenseCopy]
    })
  }

  console.log("expense", expense)

  return (
    <div className="App">
      <h2>Expenses</h2>
      <Card>
        <NewExpense expensehandler={expenseHandler} />
        <ExpenseList
          title={titleHandler}
          expense={expense}
          delete={deleteHandler}
        />
      </Card>
    </div>
  )
}

export default App
