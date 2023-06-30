import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { FC } from 'react';

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  margin-top: 50px;
`;

type MainPageProps = {
  children?: React.ReactNode;
};

const MainPage: FC<MainPageProps> = ({ children }) => {
  return (
    <StyleContainer>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </StyleContainer>
  );
};

export default MainPage;
