import styled from 'styled-components';
import MainPage from '../components/pages/MainPage';
import { useEffect, useRef, useState } from 'react';

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
  const [loading, setLoading] = useState(false);

  const pageEnd = useRef<HTMLInputElement>(null);

  const API_KEY = 'IpZQMOsCaatgi9VxVeRg8LdPaJ0Z1QaCm846GXCoV8Q';

  const fetchData = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      const result = json.results;
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchImg = async (keyword: string) => {
    const UNSPLASH_URL = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${API_KEY}&per_page=10`;
    const result = await fetchData(UNSPLASH_URL);
    setList(result);
    setLoading(true);
  };

  const fetchNextImg = async (keyword: string, page: number) => {
    const UNSPLASH_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API_KEY}&per_page=10`;
    const result = await fetchData(UNSPLASH_URL);
    setList((prev) => [...prev, ...result]);
    result.length === 0 ? setLoading(false) : setLoading(true);
  };

  const debounce = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
    let timerId: number;
    return (...args: T) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => callback(...args), delay);
    };
  };

  const handleOnChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
  }, 500);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (keyword !== '') fetchImg(keyword);
  }, [keyword]);

  useEffect(() => {
    if (page !== 1) fetchNextImg(keyword, page);
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
        <input type="text" onChange={handleOnChange} />
        <StyleImgContainer>
          {list &&
            list.map((item, i) => (
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
