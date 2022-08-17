const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(CURRENCY_API);
  const json = await response.json();
  // const objJson = Object.keys(json);
  // const filterJson = Object.keys(json).filter((currencies) => currencies !== 'USDT');

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrencies;
