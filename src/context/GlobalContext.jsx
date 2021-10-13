import React, { createContext, useReducer } from "react";
const initialState = {
  transcations: [
    {
      id: 1,
      date: "13/10/2021",
      title: "IPL Betting",
      amount: 20.45,
      income: false,
    },
    {
      id: 2,
      date: "15/10/2021",
      title: "Ganja Contract",
      amount: 142.19,
      income: true,
    },

    {
      id: 3,
      date: "16/10/2021",
      title: "Movies",
      amount: 523.53,
      income: false,
    },
    {
      id: 4,
      date: "17/10/2021",
      title: "Kaziranga  Trip",
      amount: 239.62,
      income: false,
    },
    {
      id: 5,
      date: "14/10/2021",
      title: "Esports Win",
      amount: 4290.19,
      income: true,
    },
  ],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transcations: state.transcations.filter(
          (item) => item.id !== action.payload
        ),
      };
      case "ADD" :
        return {
          ...state,
          transcations : [action.payload,...state.transcations]
        }
    default:
      return state;
  }
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const deleteItem = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const addItem = (transcation) => {
    dispatch({ type: "ADD", payload: transcation });
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ transcations: state.transcations, deleteItem, addItem }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
