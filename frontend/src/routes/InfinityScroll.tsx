import styled from 'styled-components';
import MainPage from '../components/pages/MainPage';
import { useEffect, useRef, useState } from 'react';
import { fetchImgList, fetchNextImgList } from '../utils/api';

const StyleContainer = styled.div`
  height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyleImgContainer = styled.div`
  margin-top: 50px;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyleImgBox = styled.div`
  width: 200px;
  height: 250px;

  img {
    width: 100%;
    height: 200px;
  }
`;

const StyleLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface IImgList {
  id: string;
  urls: {
    thumb: string;
  };

  alt_description: string;
}

function InfinityScroll() {
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<IImgList[]>([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const pageEnd = useRef<HTMLInputElement>(null);

  const updateImgList = async (keyword: string) => {
    const result = await fetchImgList(keyword);
    setList(result);
    setLoading(true);
  };

  const updateNextImg = async (keyword: string, page: number) => {
    const result = await fetchNextImgList(keyword, page);
    setList((prev) => [...prev, ...result]);
    result.length === 0 ? setLoading(false) : setLoading(true);
  };

  // const debounce = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
  //   let timerId: number;
  //   return (...args: T) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => callback(...args), delay);
  //   };
  // };
  // console.log('imgList : ', imglist, 'nextList :', nextList);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const value = formElement.querySelector('input')?.value;
    setInputValue('');
    if (value) setKeyword(value);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (keyword !== '') updateImgList(keyword);
  }, [keyword]);

  useEffect(() => {
    if (page !== 1) updateNextImg(keyword, page);
  }, [page]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) nextPage();
        },
        { threshold: 1 }
      );
      if (pageEnd.current) observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <MainPage>
      <StyleContainer>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleOnChange} />
        </form>

        <StyleImgContainer>
          {list.map((item, i) => (
            <StyleImgBox key={`${item.id}-${i}`}>
              <img src={item.urls.thumb} alt={item.alt_description} />
            </StyleImgBox>
          ))}
        </StyleImgContainer>
        {loading && <StyleLoading ref={pageEnd}>로딩중...</StyleLoading>}
      </StyleContainer>
    </MainPage>
  );
}

export default InfinityScroll;
