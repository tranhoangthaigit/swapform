import { IPriceToken } from "./types/price";

const baseUrl = 'http://localhost:3001';

export const getPrice = async (): Promise<IPriceToken[]> => {
  const res = await fetch(`${baseUrl}/price`, { cache: 'no-store' });
  const priceToken = await res.json();
  return priceToken;
}