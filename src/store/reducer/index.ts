import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RESTART_GAME } from './actions';
import { InitialState, Answer } from '../../types/reducer';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

// Api Consumption
const dataFetch = async () => {
  const response = await fetch(API_URL);
  return response.json();
}

// Action Creators
export const fetchQuiz = createAsyncThunk(
  'fetchQuiz',
  dataFetch,
);

const initialState: InitialState = {
  score: 0,
  totalQuestions: 0,
  questionIdx: 0,
  currentQuestion: undefined,
  isLoading: false,
  questions: [],
  answers: [],
}

// Reducer Slice
const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    submitAnswer: (state: InitialState, {payload}: PayloadAction<Answer>) => {
      state.answers.push(payload);
    },
    gotToNextQuestion: (state: InitialState) => {
      const {questionIdx, questions} = state;
      const nextQuestion = questionIdx + 1;

      state.questionIdx = nextQuestion;
      state.currentQuestion = questions[nextQuestion];
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
      // Initialize state with first question and base values
      state.isLoading = false;
      state.questions = payload.results;
      state.totalQuestions = payload.results.length;
      state.currentQuestion = payload.results[state.questionIdx];
    })
    // // Restart Game
    .addCase(RESTART_GAME, () => {
      return quizSlice.getInitialState();
    });
  },
});

export const { submitAnswer, gotToNextQuestion } = quizSlice.actions;
export default quizSlice.reducer;
