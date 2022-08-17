export default function totalExpenses(expense) {
  const { value, currency, exchangeRates } = expense;
  const getCurrentRate = Object
    .values(exchangeRates).find(({ code }) => code === currency);
  const currentAsk = Number(getCurrentRate.ask);
  const currentValue = Number(value) * currentAsk;
  return currentValue;
}
