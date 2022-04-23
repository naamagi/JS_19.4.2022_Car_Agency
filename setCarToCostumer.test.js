const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const setCarToCostumer = carAgencyFunctions.setCarToCostumer;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");

const carToAddToCustomer = {
    name: "EHS-9",
    year: 2020,
    price: 22250,
    carNumber: "xoxox",
    ownerId: "2RprZ1dbL",
    brand: "HONGQI",
  };

test("setCarToCostumer example 1", () => {
  expect(setCarToCostumer(currentCarMarket, "2RprZ1dbL", carToAddToCustomer)).toStrictEqual([
    {
      name: 'M5',
      year: 2019,
      price: 578054,
      carNumber: 'WIh0U',
      ownerId: '2RprZ1dbL'
    },
    {
      name: 'Spider',
      year: 2012,
      price: 81520,
      carNumber: 'RLS4q',
      ownerId: '2RprZ1dbL'
    },
    {
      name: 'EHS-9',
      year: 2020,
      price: 22250,
      carNumber: 'xoxox',
      ownerId: '2RprZ1dbL',
      brand: 'HONGQI'
    }
  ]);
});

