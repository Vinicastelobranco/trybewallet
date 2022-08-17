export default function exchangeOperations(expense) {
    const { value, currency, exchangeRates } = expense;
    const getRate = Object.values(exchangeRates).find(({ code }) => code === currency);
    const currencyName = getRate.name;
    const currentAsk = Number(getRate.ask);
    const convertedValue = (Math.round(Number(value) * currentAsk * 100) / 100);
  
    return {
      ...expense,
      currencyName,
      convertedValue,
      exchangeValue: currentAsk,
    };
  }