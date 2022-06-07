import React, { FC } from 'react';
import { capitalize } from 'lodash';
import styled from 'styled-components';
import Button from './Button';

export interface ButtonElement {
  id: string,
  value: string,
}

interface ButtonGroupProps {
  buttons: ButtonElement[],
  handleClick: (value: string) => void,
}

const ButtonGroup: FC<ButtonGroupProps> = ({handleClick, buttons}) => {

  const onChangeValue = (value: string) => handleClick(value);

  return (
    <StyledBtnGroup>
      {buttons.map(({id, value}: ButtonElement) => (
        <Button 
          key={id}
          width="auto"
          label={capitalize(value)}
          onClick={() => onChangeValue(value)} />
      ))}
    </StyledBtnGroup>
  )
}

const StyledBtnGroup = styled.div`
  display: flex;
  width: 100vh;
  justify-content: center;
  gap: 50px;
`;


export default ButtonGroup;