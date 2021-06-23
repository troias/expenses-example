import React from 'react'
import ExpenseItem from '../../expense/ExpenseItem/ExpenseItem'

const ExpenseList = (props) => {
    const {expense } = props
    console.log( props)
    return (
        <>
       
        {expense.map(expense => {
            return (
                <div>
                    <ExpenseItem expenses={expense} />
                </div>
            )
        })
    }
    </>
    )
}

export default ExpenseList