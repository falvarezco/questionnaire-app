import React, { FC, useEffect } from 'react';
import { sumBy } from 'lodash';
import { AppDispatch, RootState } from '../../store';
import { RESTART_GAME } from '../../store/reducer/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Text from '../../components/Text';
import ResultItem from '../../components/ResultItem';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import APP_STRINGS from '../../strings';

const {score, resetGame} = APP_STRINGS.results;

const Results: FC = () => {
  const {
    answers,
    totalQuestions,
  } = useSelector(({quizState}: RootState) => quizState);
  const dispatch = useDispatch<AppDispatch>();
  const finalScore = sumBy(answers, 'isCorrect');

  // const score = answers.length > 0 && countBy(answers, 'true')};
  let navigate = useNavigate();

  useEffect(() => {
    if (totalQuestions === 0) {
      return navigate('/');
    }
  }, [navigate, answers, totalQuestions]);

  const handleResetGame = () => {
    dispatch({type: RESTART_GAME});
    return navigate('/');
  }

  return (
    <Layout fullHeight>
      <Header>
        <Text isTitle align='center'>{score}</Text>
        <Text isTitle align='center'>{finalScore}/{totalQuestions}</Text>
      </Header>
      {answers.map((answer, idx) => <ResultItem key={`question-${idx}`} {...answer}/>)}
      <Button 
        label={resetGame}
        padding="20px 10px"
        contentAlign="center"
        onClick={handleResetGame}/>
    </Layout>
  )
};

export default Results;
