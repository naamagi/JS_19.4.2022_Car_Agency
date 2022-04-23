const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getAllCustomerCars = carAgencyFunctions.getAllCustomerCars;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");

test("getAllCustomerCars example 1", () => {
  expect(getAllCustomerCars(currentCarMarket,"cnTobUDy6")).toStrictEqual([
    {
      name: 'F250',
      year: 2020,
      price: 198500,
      carNumber: 'Xxcy_',
      ownerId: 'cnTobUDy6'
    },
    {
      name: 'Hilux',
      year: 2005,
      price: 35005,
      carNumber: 'VSCUj',
      ownerId: 'cnTobUDy6'
    }
  ]);
});

test("getAllCustomerCars example 2", () => {
    expect(getAllCustomerCars(currentCarMarket, "CnTobUDy6")).toBe(undefined);
  });