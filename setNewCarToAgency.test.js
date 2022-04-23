
const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const setNewCarToAgency = carAgencyFunctions.setNewCarToAgency;
const getAllCarToBuyByAgencyId = carAgencyFunctions.getAllCarToBuyByAgencyId;
const currentCarMarket=require("./carMarketObj-withSellersOnly");

const carObj = {
  name: "Cyber Truck",
  year: 2020,
  price: 966500,
  carNumber: "S6Dtr",
  ownerId: "Plyq5M5AZ",
  brand: "bmw",
};

test("setNewCarToAgency example 1", () => {
  expect(setNewCarToAgency(currentCarMarket, "Plyq5M5AZ", carObj)).toBe();
});

test("getAllCarToBuyByAgencyId example 2", () => {
  expect(getAllCarToBuyByAgencyId(currentCarMarket, "Plyq5M5AZ")).toStrictEqual([
    {
      name: '3',
      year: 2015,
      price: 137000,
      carNumber: 'AZJZ4',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'X6',
      year: 2020,
      price: 966500,
      carNumber: 'S6DL1',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Cyber Truck',
      year: 2020,
      price: 966500,
      carNumber: 'S6Dtr',
      ownerId: 'Plyq5M5AZ',
      brand: 'bmw'
    },
    {
      name: 'Land Cruiser',
      year: 2020,
      price: 336300,
      carNumber: '6rvXw',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Hilux',
      year: 2005,
      price: 35005,
      carNumber: 'MWXBG',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Corolla',
      year: 2020,
      price: 111900,
      carNumber: 'hCzl-',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Focus',
      year: 2020,
      price: 98200,
      carNumber: 'kN3HP',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Focus',
      year: 2005,
      price: 6502,
      carNumber: 'LJTCs',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Romeo Julia',
      year: 2020,
      price: 275406,
      carNumber: '2kjy7',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Romeo Stelvio',
      year: 2019,
      price: 215403,
      carNumber: '7A5b-',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Traverse',
      year: 2020,
      price: 201102,
      carNumber: 'QwBOT',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Impala',
      year: 2019,
      price: 165041,
      carNumber: '2v4jt',
      ownerId: 'Plyq5M5AZ'
    },
    {
      name: 'Malibu',
      year: 2017,
      price: 75405,
      carNumber: 'O4_Jv',
      ownerId: 'Plyq5M5AZ'
    }
  ]);
});
