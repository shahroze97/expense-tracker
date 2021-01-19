import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ item }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = item.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={item.amount < 0 ? 'minus' : 'plus'}>
        {item.text}
        <span>
          {sign}${Math.abs(item.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(item.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
