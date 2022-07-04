import React from "react"
import ExpenseItem from "../../expense/ExpenseItem/ExpenseItem"
import styles from "./Expenses.module.css"
import Card from "../../Ui/Card"

const ExpenseList = (props) => {
  const { expense } = props

  return (
    <>
      {expense.map((expenseItem) => {
        return (
          <li key={expenseItem.id} style={{ listStyleType: "none" }}>
            <Card className={styles.expenses}>
              <ExpenseItem
                title={props.title}
                delete={props.delete}
                expenses={expenseItem}
              />
            </Card>
          </li>
        )
      })}
    </>
  )
}

export default ExpenseList
