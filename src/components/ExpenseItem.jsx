import React, { useContext } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";

const ExpenseItem = (props) => {
  const { deleteItem } = useContext(GlobalContext);
  const { id, date, amount, title, income } = props.item;
  return (
    <div className="expense-item">
      <h3 className  = 'expense-title'>{title}</h3>
      <h4 className  ='expense-date'>{date}</h4>
      {/* {income && <h4 className ='expense-income'>+${amount}</h4>} */}
      <h4 className={income ? `expense-income` : `expense-expense`}>
        ${amount}
      </h4>
      <FaCanadianMapleLeaf onClick={() => deleteItem(id)} />
    </div>
  );
};

export default ExpenseItem;
