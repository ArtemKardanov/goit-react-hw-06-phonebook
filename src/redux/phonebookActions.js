import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADDCONTACT', function prepare(contact) {
  return {
    payload: { ...contact, id: shortid() },
  };
});

export const deleteContact = createAction('DELETECONTACT');

export const filter = createAction('FILTER');
