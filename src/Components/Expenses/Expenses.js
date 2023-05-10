import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = ({ items }) => {
  // console.log(items);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };

  // items = items.filter((objects) => {
  //   return objects.date.getFullYear().toString() === filteredYear;
  // }); othe way to do it

  const filteredItems = items.filter((objects) => {
    return objects.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/*filteredItems son los items que ya están filtrados y ahora sólo falta que se renderizen , por esa razón el mapeo */}
        {/* Usar operadores ternarios para desplegar condicionalmente una componente está bien, pero para tener un código más esbelto, se puede usar coerción implícita (booleans &&) */}
        {filteredItems.length === 0 && <p>No expenses found</p>}
        {filteredItems.length > 0 &&
          filteredItems.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
