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

export const fetchImgList = async (keyword: string) => {
  const UNSPLASH_URL = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${API_KEY}&per_page=10`;
  const result = await fetchData(UNSPLASH_URL);
  return result;
};

export const fetchNextImgList = async (keyword: string, page: number) => {
  const UNSPLASH_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API_KEY}&per_page=10`;
  const result = await fetchData(UNSPLASH_URL);
  return result;
};
