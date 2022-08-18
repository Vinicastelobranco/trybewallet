export function addExpense(expense) {
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

  export function removeExpense(getId, getState) {
    const { expenses, totalValue: getSum } = getState;
  
    const getExpense = expenses.find(({ id }) => id === getId);
    const { value, currency, exchangeRates } = getExpense;
    const getRate = Object.values(exchangeRates).find(({ code }) => code === currency);
    const currentAsk = Number(getRate.ask);
    const updateExpenses = expenses.filter(({ id }) => id !== getId);
    const updateSum = Math.round((getSum - Number(value) * currentAsk) * 100) / 100;
  
    return {
      updateExpenses,
      updateSum,
    };
  }