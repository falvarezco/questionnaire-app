import React, { EventHandler, FC, MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string,
  onClick?: EventHandler<MouseEvent>,
}

const StyledButton = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  background: none;
`;

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
}

export default Button;