import React from "react";
import ExpenseItem from './expense_Item/ExpenseItem';
import './Expenses.css';

const Expenses =(props) =>{
    const{expenses}=props;
    return (
        <div className="expenses">
     {  
        expenses.map((each_expense)=>{
            return(
                <ExpenseItem
                key={each_expense.id}
                title={each_expense.title}
                amount={each_expense.amount}
                date={each_expense.date}
                />
            )
        })
     
     /* <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      />
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      />
      <ExpenseItem/> */}
        </div>
    );
}

export default Expenses;