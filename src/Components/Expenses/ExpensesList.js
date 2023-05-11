import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredItems }) => {
  if (filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredItems.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
