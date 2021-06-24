import React from "react";
import ExpenseItem from "../../expense/ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";
import Card from "../../Ui/Card";

const ExpenseList = (props) => {
  const { expense } = props;
    // console.log(expense)
    // console.log(props.title)
  return (
    <>
      {expense.map((expense) => {
        return (
       
            <Card className={styles.expenses}>
             
                <ExpenseItem expenses={expense}  title={props.title}/>
             
            </Card>
     
        );
      })}
    </>
  );
};

export default ExpenseList;
