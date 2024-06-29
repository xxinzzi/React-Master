import axios from "axios";

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

export async function fetchCoinHistory(coinId: string) {
    //const endDate = Math.floor(Date.now()/1000);
    //const startDate = endDate - 60*60*24*7*2;
    return await (await axios(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)).data;
}