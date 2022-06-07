// Data Types
export interface Question {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string,
}

export interface Answer {
  question: string,
  value: boolean,
}

// State
export interface InitialState {
  answers: Answer[],
  currentQuestionIdx: number,
  questions: Question[],
  score: number,
  isLoading: boolean,
  totalQuestions: number,
}

// Action Types
export interface SubmitAnswer {
  type: 'string',
  payload: Answer,
}

