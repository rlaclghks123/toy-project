import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { Dark, Default } from './theme';

const DarkModeBtn = styled.button`
  border: none;
  padding: 10px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};

  &:hover {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const togleBtn = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? Dark : Default}>
        <GlobalStyle />
        <DarkModeBtn onClick={togleBtn}>다크모드</DarkModeBtn>
      </ThemeProvider>
    </>
  );
}

export default App;
