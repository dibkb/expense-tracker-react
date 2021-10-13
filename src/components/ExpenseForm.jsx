import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { GlobalContext } from "../context/GlobalContext";
const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState(-1);
  const { addItem } = useContext(GlobalContext);

  const validateInput = (inputTitle, inputAmount, inputSelect) => {
    if (
      inputTitle.trim().length &&
      inputAmount &&
      inputSelect !== -1
    ) {
      return true;
    } else return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateInput(title, amount, income)) {
      const newTranscation = {
        id: nanoid(),
        date: new Date().toLocaleDateString(),
        title: title,
        amount: amount,
        income: income === '1' ? true : false,
      };
      console.log(newTranscation);
      addItem(newTranscation);
    } else {
      alert("INVALID INPUT");
    }
  };
  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          step = '0.01'
          name="amount"
          value={amount}
          min="1"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </label>
      <label>
        <select onChange={(e) => setIncome(e.target.value)}>
          <option value={-1}>Please select an option</option>
          <option value={0}>expense</option>
          <option value={1}>income</option>
        </select>
      </label>
      <button type="submit">add item</button>
    </form>
  );
};

export default ExpenseForm;
