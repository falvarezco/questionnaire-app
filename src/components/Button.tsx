import React, { EventHandler, FC, MouseEvent } from 'react';
import { omit } from 'lodash';
import styled from 'styled-components';

interface StyledButtonProps {
  width?: string,
  padding?: string,
  margin?: string,
  contentAlign?: string,
}
interface ButtonProps extends StyledButtonProps {
  label: string,
  onClick?: EventHandler<MouseEvent>,
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({width}) => width ? width : 'inherit'};
  display: flex;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  background: none;
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  justify-content: ${({contentAlign}) => contentAlign};
  &:hover {
    opacity: 0.5;
  }
`;

const Button: FC<ButtonProps> = (props) => {
  const styledProps = omit(props, ['label, onClick']);
  return (
    <StyledButton {...styledProps} onClick={props.onClick}>
      {props.label}
    </StyledButton>
  );
}

export default Button;