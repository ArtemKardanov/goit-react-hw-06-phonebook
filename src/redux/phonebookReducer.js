import { addContact, deleteContact, filter } from './phonebookActions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialState = {
  contacts: [],
  filter: '',
};

const contactReducer = createReducer(initialState.contacts, {
  [addContact]: (state, { payload }) => {
    const nameExist = state.find(contact => contact.name === payload.name);
    if (nameExist) {
      alert(`is already exist`);
      return state;
    }
    const contact = payload;
    return [...state, contact];
  },
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer(initialState.filter, {
  [filter]: (state, action) => {
    return (state = action.payload);
  },
});

export default combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
