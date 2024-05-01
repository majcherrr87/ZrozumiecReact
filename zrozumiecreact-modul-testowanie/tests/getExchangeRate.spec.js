import { getExchangeRate } from "../src/getExchangeRate.js";

test("Displays proper PLN to USD conversion rate", async () => {
  const currencyData = {
    then: (callback) => {
      return callback({ exchangeRate: 0.25 });
    },
  };
  const result = await getExchangeRate(currencyData);
  const expectedResult = "Obecny kurs wymiany PLN na USD to: 0.25";
  expect(result).toBe(expectedResult);
});
