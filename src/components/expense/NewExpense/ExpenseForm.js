import React, { useState } from 'react'
import styles from './ExpenseForm.module.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState()
    const [number, setNumber] = useState()
    const [date, setDate] = useState()
    const [description, setDescription] = useState()

    const submitHandler = (event) => {
        event.preventDefault()

        const obj = {

            title: title,
            number: +number,
            date: new Date(date), 
            id: Math.random(), 
            description: description

        }
        props.handler(obj)
        // console.log(obj)
    }
    return (

        <form onSubmit={submitHandler} action="" >
            <div className={styles.newExpense__controls}>
                <div className={`${styles['newExpense__control']}`}>
                    <label >Title</label>
                    <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
                    <input type="number" placeholder="Enter-Amount" min="0.01" step="0.01" onChange={(event) => setNumber(event.target.value)} />
                    {/* <input type="text" min="0.01" step="0.01" onChange={(event) => setDescription(event.target.value)} /> */}
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => setDate(event.target.value)} />
                    
                    
                </div>
                <button className={styles.newExpense__controls__actions} type="submit">Add Expenses</button>
                </div>
        
          
        </form>

    )
}

export default ExpenseForm
