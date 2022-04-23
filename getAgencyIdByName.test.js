const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const currentCarMarket=require("./carMarketObj-withSellersOnly");
const getAgencyIdByName = carAgencyFunctions.getAgencyIdByName;

test("getAgencyIdByName", () => {
  expect(getAgencyIdByName(currentCarMarket, "Best Deal")).toBe("Plyq5M5AZ");
});
