import React, {FC, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchQuiz } from '../../store/reducer';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import APP_STRINGS from '../../strings';

const {header, intro, loading, buttonText} = APP_STRINGS.home;

const Home: FC = () => {
  let navigate = useNavigate();
  const {isLoading} = useSelector(({quizState}: RootState) => quizState);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const onBeginHandleClick = () => navigate('/quiz');

  return !isLoading ? (
    <>
      <Header>
        <Text isTitle>{header.title}</Text>
      </Header>
      <Text padding="50px 0">{intro.details}</Text>
      <Text>{intro.question}</Text>
      <Button label={buttonText} onClick={onBeginHandleClick}/>
    </>
  ) : 
  <Text isTitle>{loading}</Text>;
}

export default Home;