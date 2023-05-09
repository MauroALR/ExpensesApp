import "./ExpenseDate.css";
import React from "react";

const ExpenseDate = ({date}) => {
  const month = date.toLocaleDateString("es-mx", { month: "2-digit" });
  const day = date.toLocaleDateString("es-mx", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
