import React, { ReactNode, FC } from 'react';
import { omit } from 'lodash';
import Styled from 'styled-components';

interface StyledProps {
  margin?: string,
  padding?: string,
  align?: string,
}

interface TextProps extends StyledProps {
  isTitle?: boolean,
  children: ReactNode,
}

const StyledTitle = Styled.h1<StyledProps>`
  text-align: ${({align}) => align || 'center'};
  font-size: 1.8rem;
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
`;

const StyledParagraph = Styled.p<StyledProps>`
  text-align: ${({align}) => align || 'center'};
  font-size: 1.4rem;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const Text: FC<TextProps> = (props) => {
  const styledProps = omit(props, ['children', 'isTitle']);
  return (
    props.isTitle ? 
      <StyledTitle {...styledProps}>
        {props.children}
      </StyledTitle>
      :
      <StyledParagraph {...styledProps}>
        {props.children}
      </StyledParagraph>
  )
};

export default Text;