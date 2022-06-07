import React, { useEffect, useRef } from 'react';
import { unescape }from 'lodash';
import { AppDispatch, RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Question } from '../../types/reducer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Text from '../../components/Text';


const Quiz = () => {
  const {
    currentQuestionIdx,
    totalQuestions,
    questions,
  } = useSelector(({quizState}: RootState) => quizState);
  let navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const question = useRef<Question>(questions[currentQuestionIdx]);

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/');
    }
    question.current = questions[currentQuestionIdx];
  }, [currentQuestionIdx, questions, navigate]);

  return (
    <>
      <Header>
        <Text isTitle>{question.current?.category}</Text>
      </Header>
      <Card>
        <Text>{unescape(question.current?.question)}</Text>
      </Card>
      <Text>{`${currentQuestionIdx + 1}/${totalQuestions}`}</Text>
    </>
  )
};

export default Quiz;
