import axios from "axios";
import { StyledInstance } from "styled-components";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await (await axios.get(`${BASE_URL}/coins`)).data;
}

export async function fetchCoinInfo(coinId: string) {
    return await (await axios(`${BASE_URL}/coins/${coinId}`)).data;
}

export async function fetchCoinTickers(coinId: string) {
    return await (await axios(`${BASE_URL}/tickers/${coinId}`)).data;
}