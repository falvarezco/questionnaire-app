import {configureStore} from '@reduxjs/toolkit';
import quiz from './reducer';

export const store = configureStore({
  reducer: {
    quizState: quiz,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

