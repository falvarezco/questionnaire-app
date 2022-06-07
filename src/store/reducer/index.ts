import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, SubmitAnswer } from '../../types/reducer';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export const fetchQuiz = createAsyncThunk(
  'fetchQuiz',
  async () => {
    const response = await fetch(API_URL);
    return response.json();
  }
);

const initialState: InitialState = {
  score: 0,
  totalQuestions: 0,
  currentQuestionIdx: 0,
  isLoading: false,
  questions: [],
  answers: [],
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    submitAnswer: (state: any, {payload}: PayloadAction<SubmitAnswer>) => {
      state.score = payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchQuiz.pending, (state, {payload}) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    })
    .addCase(fetchQuiz.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.questions = payload.results;
      state.totalQuestions = payload.results.length;
    });
  },
});

export const { submitAnswer } = quizSlice.actions;
export default quizSlice.reducer;
