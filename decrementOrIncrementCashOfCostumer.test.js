const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const decrementOrIncrementCashOfCostumer = carAgencyFunctions.decrementOrIncrementCashOfCostumer;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");



test("decrementOrIncrementCashOfCostumer example 1", () => {
  expect(decrementOrIncrementCashOfCostumer(currentCarMarket, "pAuFtn_WA", 2000)).toBe(127402);
});
