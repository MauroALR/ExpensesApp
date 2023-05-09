// function Expense(props) {
//     // console.log(props);
//     return (props.map((item) => {const { title: itemTitle, amount: itemAmount, date: itemDate } = item;})) 
//     }



// const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//  console.log(Expense(expenses));

import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter,setCounter] = React.useState(0);
    
    const counterHandler = (e) =>{
        console.log(e)
         setCounter(e + 1)
    }
    
    
    return (
      <div>
        <p id="counter"></p>
        <button onClick={(e)=>{
            counterHandler(e.target.value)
        }}>Increment</button>
        <p>{counter}</p>
      </div>
    );
}
