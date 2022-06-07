import React, { ReactNode, FC } from 'react';
import Styled from 'styled-components';

interface LayoutProps {
  children: ReactNode,
}

const Container = Styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Layout;