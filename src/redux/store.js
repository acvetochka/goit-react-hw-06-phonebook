// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer
  },
});
