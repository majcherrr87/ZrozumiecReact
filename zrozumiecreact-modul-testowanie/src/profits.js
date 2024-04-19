export function yearlyProfitCalculator(startAmount, interestRate) {
  const tax = 19;
  const profit =
    startAmount * ((100 + interestRate) / 100 - 1) * ((100 - tax) / 100);
  return parseFloat(profit.toFixed(2));
}
