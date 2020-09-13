import React, { createContext, useContext, useReducer } from 'react';

// preparing datalayer : creating context
export const StateContext = createContext();

//save the data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}//children is App /
  </StateContext.Provider>
);

//allows us to pull the data
export const useStateValue = () => useContext(StateContext);
