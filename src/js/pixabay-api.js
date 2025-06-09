import axios from 'axios';

const pixabayApiEndpoint = 'https://pixabay.com/api/';
const PER_PAGE = 15;
const MAX_PAGES = 500 / PER_PAGE;

const defaultConf = {
  key: '40945002-e125ab8d3394997b1a8dc0871',
  image_type: 'photo',
  safesearch: true,
  per_page: PER_PAGE,
  orientation: 'horizontal',
};

export default async function fetchImages(wordToSearch, conf = {}) {
  if (conf.page > MAX_PAGES) return { hits: [] };
  const res = await axios.get(pixabayApiEndpoint, {
    params: { ...defaultConf, ...conf, q: wordToSearch },
  });
  console.log(res.data.hits);
  return res.data;
}
