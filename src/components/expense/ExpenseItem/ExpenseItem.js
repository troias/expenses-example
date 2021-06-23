import React from 'react'
import styles from './ExpenseItem.module.css'

const ExpenseItem = (props) => {
    const { expenses: { date, description, title, amount } } = props

    const month = date.toLocaleString("en-US", { month: "long" })
    const day = date.toLocaleString("en-US", { day: "2-digit" })
    const year = date.getFullYear()
    return (
        <div className={styles.expenseItem}>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>


            {/* <time>{date.toISOString()}</time> */}
            <div className={styles.expenseItem__description}>
                {description}
            </div>
            <h2 > {title}</h2>
            <div className={styles.expenseItem__price}>
                Amount: {amount}
            </div>
        </div>
    )
}

export default ExpenseItem
