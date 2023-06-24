/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { forumReducer, initialState } from "../reducer/forumReducer";
export const ForumContext = createContext();

export function ForumProvider({ children }) {
  const [state, dispatch] = useReducer(forumReducer, initialState);
  console.log(state);
  return (
    <ForumContext.Provider value={{ state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
}
