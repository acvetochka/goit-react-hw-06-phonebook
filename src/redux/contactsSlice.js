import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;

// export const contactReducer = createReducer(initialState, builder =>
//   builder.addCase(contacts, (state, action) =>
//     state.contacts.push(action.contacts)
//   )
// );
// export const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.contacts],
//       };

//     default:
//       return state;
//   }
// };
// console.log(contactsSlice.addContact('Hadga', 637738993));

// export const contacts = createAction('contacts');

// export const contacts = arr => {
//   return {
//     type: 'contacts',
//     payload: arr,
//   };
// };
