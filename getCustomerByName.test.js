const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getCustomerByName = carAgencyFunctions.getCustomerByName;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");

test("getCustomerByName example 1", () => {
  expect(getCustomerByName(currentCarMarket, "Ravi Murillo")).toStrictEqual({
    name: 'Ravi Murillo',
    id: '2RprZ1dbL',
    cars: [
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
      }
    ],
    cash: 278542
  });
});

test("getCustomerByName example 2", () => {
  expect(getCustomerByName(currentCarMarket, "ravi murillo")).toStrictEqual({
    name: 'Ravi Murillo',
    id: '2RprZ1dbL',
    cars: [
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
      }
    ],
    cash: 278542
  });
});

test("getCustomerByName example 3", () => {
    expect(getCustomerByName(currentCarMarket, "Ravi Murilo")).toBe(undefined);
  });
  