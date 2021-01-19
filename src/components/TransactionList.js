import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((item) => {
          return <Transaction key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
