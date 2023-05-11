import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false); // false es el estado incial

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log('New Expense!')
    // console.log(enteredExpenseData)
    console.log("new Expense!");
    console.log(expenseData);
    onAddExpense(expenseData); //pasa las propiedades a la componente padre
    setIsEditing(false);//después de darle click al botón de Add New Expense, le cambia el estado a false
  };

  const startEditingHandler = () => {
    //Esta función maneja el evento de clickear el botón Add New Expense
    setIsEditing(true); //es true una vez que se le da click porque así sabemos en qué estado está.
    console.log(isEditing); //isEditing tiene la bandera que activa el botón al ser clickeado
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}//añade nuevas componentes 
          onCancel={stopEditingHandler} //Cuando se le pica al botón cancel, se cierra la componente forms
        />
      )}
    </div>
  );
};

export default NewExpense;
