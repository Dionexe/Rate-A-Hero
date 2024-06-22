import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;
const privateKey = process.env.REACT_APP_PRIVATE_KEY as string;
const timeStamp = new Date().getTime().toString();
const hash = md5(timeStamp + privateKey + publicKey);

export const fetchMarvelData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const generateMarvelUrl = (search?: string) => {
  return search
    ? `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    : `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;
};
