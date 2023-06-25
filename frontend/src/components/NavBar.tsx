import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleContainer = styled.div`
  height: 50px;
  width: 100%;

  position: fixed;
  top: 0;

  display: flex;
  z-index: 999;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};

  border-bottom: 0.1px solid ${(props) => props.theme.textColor};
`;

const StyleLogo = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleItems = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  font-size: 12px;

  a {
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
`;

function NavBar() {
  return (
    <StyleContainer>
      <StyleLogo>
        <Link to="/">Toy-Project</Link>
      </StyleLogo>
      <StyleItems>
        <Link to="/infinityScroll">무한스크롤</Link>
      </StyleItems>
    </StyleContainer>
  );
}
export default NavBar;
