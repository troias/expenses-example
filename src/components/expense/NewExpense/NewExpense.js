import React from 'react'
import styles from './NewExpense.module.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    return (
        <div className={styles.newExpense}>
         <ExpenseForm handler={props.expensehandler}/>

        </div>
    )
}

export default NewExpense