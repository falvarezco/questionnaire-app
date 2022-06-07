import React, { FC, useEffect } from 'react';
import { AppDispatch, RootState } from '../../store';
import { submitAnswer, gotToNextQuestion } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { decodeTxt } from '../../utils';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Text from '../../components/Text';
import ButtonGroup, { ButtonElement } from '../../components/ButtonGroup';

const BUTTONS: ButtonElement[] = [
  {id: 'trueField', value: 'true'},
  {id: 'falseField', value: 'false'},
];

const Quiz: FC = () => {
  const {
    currentQuestion,
    totalQuestions,
    questionIdx,
  } = useSelector(({quizState}: RootState) => quizState);

  let navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!currentQuestion) {
      return navigate('/');
    }
  }, [navigate, currentQuestion]);

  // Save Submited Answer or Go to Results
  const handleValueSelected = (value: string): void | { payload: undefined; type: string; } => {
    const isLastQuestion = questionIdx + 1 === totalQuestions;
    const correct = currentQuestion?.correct_answer;
    const isCorrect = value === correct?.toLowerCase();

    dispatch(submitAnswer({question: currentQuestion?.question, isCorrect}));
    return isLastQuestion ? navigate('/results') : dispatch(gotToNextQuestion());
  }

  return (
    <>
      {currentQuestion && (
        <>
          <Header>
            <Text isTitle>{currentQuestion.category}</Text>
          </Header>
          <Card>
            {/* TODO: Adress missing characters */}
            <Text>{decodeTxt(currentQuestion.question)}</Text>
          </Card>
          <ButtonGroup handleClick={handleValueSelected} buttons={BUTTONS}/>
          <Text>{`${questionIdx + 1}/${totalQuestions}`}</Text>
        </>
      )}
    </>
  )
};

export default Quiz;
