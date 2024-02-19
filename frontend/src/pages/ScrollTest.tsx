import styled from 'styled-components';
import MainPage from './MainPage';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface RegionList {
  region_id: string;
  region_name: string;
  imgUrl: string;
}

const fetchFn = async () => {
  const data = await fetch('http://localhost:5173/region');
  const json = await data.json();
  return json;
};

const ScrollTest = () => {
  const { data } = useQuery({ queryKey: ['itemList'], queryFn: fetchFn });
  const homeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
    const scrollPosition = window.scrollY;
    // 스크롤 위치가 특정 값 이상이면 버튼을 보이도록 설정
    if (scrollPosition > 750) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUp = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: any) => {
    const keyword = e.target.value;
    setTimeout(() => {
      console.log(keyword);
    }, 5000);
    console.log(keyword);
  };

  return (
    <MainPage>
      <Wrapper>
        <StartBtnBox>
          <StartButton onClick={handleClick}>시작하기</StartButton>
        </StartBtnBox>
        <SearchBox ref={homeRef}>
          <input placeholder="검색어를 입력해주세요" onChange={handleChange} />
          <Grid>
            {data &&
              data.map((item: RegionList) => {
                return (
                  <ItemList key={item.region_id}>
                    <img src={item.imgUrl} />
                    <p>{item.region_name}</p>
                  </ItemList>
                );
              })}
          </Grid>
        </SearchBox>
      </Wrapper>
      <UpBtn isVisible={isVisible} onClick={handleUp}>
        Up
      </UpBtn>
    </MainPage>
  );
};

export default ScrollTest;

const Wrapper = styled.div`
  height: 200vh;
`;

const StartBtnBox = styled.div`
  width: 100%;
  height: calc(99vh - 43px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 3px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 10px;
  width: 1000px;
  height: 100px;
  gap: 20px;
`;

const ItemList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: tomato;

  img {
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 15px;
  }
`;

const UpBtn = styled.button<{ isVisible: boolean }>`
  border: none;
  padding: 10px;
  position: fixed;
  bottom: 50px;
  right: 10px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in;

  &:hover {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.textColor};
  }
`;
