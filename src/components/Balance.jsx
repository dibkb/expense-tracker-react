import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Balance = () => {
  const { transcations } = useContext(GlobalContext);
  const expenseArray = transcations.filter((item) => !item.income);
  const incomeArray = transcations.filter((item) => item.income);

  const totalIncome = incomeArray
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr)
    .toFixed(2);
  const totalExpense = expenseArray
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr)
    .toFixed(2);
  return (
    <div className="balance">
      <section className="available-balance">
        <h3>YOUR BALANCE</h3>
        <pre>${(totalIncome - totalExpense).toFixed(2)}</pre>
      </section>
      <main className="balance-info">
        <div className="row-expence">
          <h3>EXPENSES</h3>
          <pre>${totalExpense}</pre>
        </div>
        <div className="row-income">
          <h3>INCOME</h3>
          <pre>${totalIncome}</pre>
        </div>
      </main>
    </div>
  );
};

export default Balance;
