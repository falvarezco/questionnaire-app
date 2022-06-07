import React, { ReactNode, FC } from 'react';
import Styled from 'styled-components';

interface TextProps {
  isTitle?: boolean,
  margin?: string,
  padding?: string,
  children: ReactNode,
}

interface StyledProps {
  margin?: string,
  padding?: string,
}

const StyledTitle = Styled.h1<StyledProps>`
  text-align: center;
  font-size: 1.8rem;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const StyledText = Styled.p<StyledProps>`
  text-align: center;
  font-size: 1.4rem;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const Text: FC<TextProps> = ({isTitle, children, margin, padding}) => {
  return (
    isTitle ? 
      <StyledTitle margin={margin} padding={padding}>
        {children}
      </StyledTitle>
      :
      <StyledText margin={margin} padding={padding}>
        {children}
      </StyledText>
  )
};

export default Text;