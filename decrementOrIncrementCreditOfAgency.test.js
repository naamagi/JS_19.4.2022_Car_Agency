const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const decrementOrIncrementCreditOfAgency = carAgencyFunctions.decrementOrIncrementCreditOfAgency;
const currentCarMarket=require("./carMarketObj-withSellersOnly");



test("decrementOrIncrementCreditOfAgency example 1", () => {
  expect(decrementOrIncrementCreditOfAgency(currentCarMarket, "Plyq5M5AZ", 4000)).toBe(204000);
});
