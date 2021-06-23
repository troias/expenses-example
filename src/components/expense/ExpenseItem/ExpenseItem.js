import React from 'react'
import styles from './ExpenseItem.module.css'

const ExpenseItem = (props) => {
    const { expenses: {expense: {date, title, description, amount}}} = props
  

    console.log(props)
    
    return (
        <div className={styles.expenseItem}>
            <time>{date.toISOString()}</time>

            <div className={styles.expenseItem__description}> {description}</div>
            <h2 > {title}</h2>
            <div className={styles.expenseItem__price}>Amount: {amount}</div>
        </div>
    )
}

export default ExpenseItem
