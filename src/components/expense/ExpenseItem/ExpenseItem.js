import React, { useState } from "react"
import styles from "./ExpenseItem.module.css"
import ExpenseDate from "../ExpenseDate/ExpenseDate"
import Card from "../../Ui/Card"

const ExpenseItem = ({
  expenses: { id, title, description, amount, date },
  titleHandler,
  deleteHandler,
}) => {
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescriptionHandler = () => {
    setShowDescription((prevState) => !prevState)
  }

  console.log("expense date", titleHandler)

  return (
    <Card className={styles.expenseItem_card}>
      <div className={styles.expenseItem__container}>
        <ExpenseDate date={date} />
        <div className={styles.expenseItem__title}>
          <h2>{title}</h2>
          <button
            className={styles.expenseItem__Button}
            onClick={() => titleHandler(id)}
          >
            Change Title to Pizza
          </button>
          <button
            className={styles.expenseItem__Button}
            onClick={() => deleteHandler(id)}
          >
            Delete
          </button>
        </div>
        <p className={styles.expenseItem__price}>Amount: ${amount}</p>
      </div>

      <div className={styles.expenseItem__description}>
        <button
          className={styles.expenseItem__descriptionButton}
          onClick={toggleDescriptionHandler}
        >
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
        {showDescription && <p>{description}</p>}
      </div>
    </Card>
  )
}

export default ExpenseItem
