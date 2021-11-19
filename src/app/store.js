import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers/reducers';

const store = configureStore({
  reducer: reducers,
  middleware: [],
});

export default store;
