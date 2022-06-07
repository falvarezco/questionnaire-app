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
  question: string | undefined,
  isCorrect: boolean | string,
}

// State
export interface InitialState {
  answers: Answer[],
  questionIdx: number,
  currentQuestion: Question | undefined,
  questions: Question[],
  score: number,
  isLoading: boolean,
  totalQuestions: number,
}

