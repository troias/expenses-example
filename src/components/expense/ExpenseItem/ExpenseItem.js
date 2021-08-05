import React from 'react'
import styles from './ExpenseItem.module.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../../Ui/Card'

const ExpenseItem = (props) => {
    const { expenses: { date, description, titles: title, amount, id } } = props
  

    const titleHandler = (id) => {
        props.title(id)
    }

    return (
        <Card className={styles.expenseItem} >
            <ExpenseDate date={date}/>
            <div className={styles.expenseItem__description} key={id}>
                {description}
            </div>
            <h2 > {title}</h2>
            <div className={styles.expenseItem__price}>
                Amount: {amount}
            </div>
            <button onClick={() => titleHandler(id)}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
