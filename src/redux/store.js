import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phonebookReducer from './phonebookReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
