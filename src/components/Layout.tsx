import React, { ReactNode, FC } from 'react';
import Styled from 'styled-components';

interface ContainerProps {
  fullHeight?: boolean,
}

interface LayoutProps extends ContainerProps {
  children: ReactNode,
}

const Container = Styled.div<ContainerProps>`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

const FullHeightContainer = Styled.div<ContainerProps>`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Layout: FC<LayoutProps> = ({children, fullHeight}) => {
  return (
    fullHeight ? 
    <FullHeightContainer>
      {children}
    </FullHeightContainer>
    :
    <Container>
      {children}
    </Container>
  )
}

export default Layout;