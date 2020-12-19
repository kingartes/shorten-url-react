import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../components/Registration/redux/registrationSlice';

export default configureStore({
  reducer: {
    registrationForm: registrationReducer,
  },
});
