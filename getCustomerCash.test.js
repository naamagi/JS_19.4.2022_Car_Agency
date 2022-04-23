const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getCustomerCash = carAgencyFunctions.getCustomerCash;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");

test("getCustomerCash example 1", () => {
  expect(getCustomerCash(currentCarMarket,"cnTobUDy6")).toBe(7000);
});

test("getCustomerCash example 2", () => {
    expect(getCustomerCash(currentCarMarket, "CnTobUDy6")).toBe(undefined);
  });