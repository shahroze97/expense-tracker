import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  transaction: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
