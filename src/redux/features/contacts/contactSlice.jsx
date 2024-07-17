import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    setContacts(state, action) {
      return action.payload;
    },
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
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
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
