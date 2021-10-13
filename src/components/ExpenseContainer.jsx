import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ExpenseItem from "./ExpenseItem";
const ExpenseContainer = () => {
  const [state, setState] = useState("all");
  const { transcations} = useContext(GlobalContext);
  return (
    <div className="expense-container">
      <select
        className="expense-select"
        id="select"
        onChange={(e) => setState(e.target.value)}
      >
        <option value="all">all</option>
        <option value="expense">expense</option>
        <option value="income">income</option>
      </select>
      {/* {transcations.map((item) => {
        if (state === "income" && item.income) {
          console.log(state);
          return <ExpenseItem key={item.id} item={item} />;
        } else if (state === "expense" && !item.income) {
          console.log(state);
          return <ExpenseItem key={item.id} item={item} />;
        } else return <ExpenseItem key={item.id} item={item} />;
      })} */}
      {state === "all" &&
        transcations.map((item) => {
          return <ExpenseItem key={item.id} item={item} />;
        })}
      {state === "income" &&
        transcations
          .filter((item) => item.income)
          .map((item) => {
            return <ExpenseItem key={item.id} item={item} />;
          })}
      {state === "expense" &&
        transcations
          .filter((item) => !item.income)
          .map((item) => {
            return <ExpenseItem key={item.id} item={item} />;
          })}
    </div>
  );
};

export default ExpenseContainer;
