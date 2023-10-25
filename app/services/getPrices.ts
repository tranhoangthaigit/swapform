import axios from 'axios';

export const getPrice = async () => {
  const response = await axios.get('https://interview.switcheo.com/prices.json');
  return response;
}