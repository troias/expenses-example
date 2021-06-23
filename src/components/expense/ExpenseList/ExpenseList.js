import React from 'react'
import ExpenseItem from '../../expense/ExpenseItem/ExpenseItem'

 const ExpenseList = (props) => {
    return (
        <div>
            <ExpenseItem expenses={props}/>
        </div>
    )
}

export default ExpenseList