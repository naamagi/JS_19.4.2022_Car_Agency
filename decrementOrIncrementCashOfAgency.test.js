
const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const decrementOrIncrementCashOfAgency = carAgencyFunctions.decrementOrIncrementCashOfAgency;
const currentCarMarket=require("./carMarketObj-withSellersOnly");



test("decrementOrIncrementCashOfAgency example 1", () => {
  expect(decrementOrIncrementCashOfAgency(currentCarMarket, "Plyq5M5AZ", -5000)).toBe(1240000);
});

