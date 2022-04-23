const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getAllCustomersNames = carAgencyFunctions.getAllCustomersNames;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");

test("getAllCustomersNames example 1", () => {
  expect(getAllCustomersNames(currentCarMarket)).toStrictEqual([
    'Lilah Goulding',
    'Ravi Murillo',
    'Aleksander Carr',
    'Lana Edge',
    'Nikita Philip',
    'Bob Steel',
    'Will Reyes'
  ]);
});

