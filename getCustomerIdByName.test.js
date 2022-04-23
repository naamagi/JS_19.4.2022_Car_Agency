const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getCustomerIdByName = carAgencyFunctions.getCustomerIdByName;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");

test("getCustomerIdByName example 1", () => {
  expect(getCustomerIdByName(currentCarMarket, "Ravi Murillo")).toBe("2RprZ1dbL");
});

test("getCustomerIdByName example 2", () => {
  expect(getCustomerIdByName(currentCarMarket, "ravi murillo")).toBe("2RprZ1dbL");
});

test("getCustomerIdByName example 3", () => {
    expect(getCustomerIdByName(currentCarMarket, "Ravi Murilo")).toBe(undefined);
  });
  