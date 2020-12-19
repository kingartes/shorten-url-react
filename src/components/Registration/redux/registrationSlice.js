import { initialFormModel } from './constants';
import { createSlice } from '@reduxjs/toolkit';

export const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState: initialFormModel,
  reducers: {
    onValueChange: (state, action) => {
        console.log(state);
        const { payload: {fieldName, value} } = action;
        state[fieldName] = value;
    }
  },
});

export const { onValueChange } = registrationFormSlice.actions;

export const selectRegistrationForm = state =>  { console.log(state); return state.registrationForm }

export default registrationFormSlice.reducer;
