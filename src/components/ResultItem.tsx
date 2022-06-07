import React, { FC } from 'react';
import { decodeTxt } from '../utils';
import { Answer } from '../types/reducer';
import styled from 'styled-components';
import Text from './Text';

const ResultItem : FC<Answer> = ({question, isCorrect}) => {
  return (
    <StyledResult>
      <span className='icon'>{isCorrect ? '+' : '-'}</span>
      <Text align='left'>{question && decodeTxt(question)}</Text>
    </StyledResult>
  )
};

const StyledResult = styled.div`
  display: flex;
  color: #939393;
  gap: 10px;
  margin: 10px;
  align-items:center;
  background: #d8d8d8;
  border-radius: 5px;
  padding: 10px;
  .icon {
    font-size: 2.5rem;
  }
`

export default ResultItem;