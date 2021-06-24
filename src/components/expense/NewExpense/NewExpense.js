import React from 'react'
import styles from './NewExpense.module.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = () => {
    return (
        <div className={styles.newExpense}>
         <ExpenseForm/>

        </div>
    )
}

export default NewExpense