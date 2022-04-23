const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const currentCarMarket=require("./carMarketObj-withSellersOnly");
const getAgencyByName = carAgencyFunctions.getAgencyByName;
// const carMarket=carAgencyFunctions.carMarket;


test("getAgencyByName", () => {
  expect(getAgencyByName(currentCarMarket, "CarMax")).toStrictEqual({
    agencyName: "CarMax",
    cash: 968541,
    credit: 500000,
    agencyId: "26_IPfHU1",
    cars: [
      {
        brand: "bmw",
        models: [
          {
            name: "X5",
            year: 2015,
            price: 218000,
            carNumber: "4Ixb0",
            ownerId: "26_IPfHU1",
          },
          {
            name: "X6",
            year: 2014,
            price: 97100,
            carNumber: "kAnv-",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Z4",
            year: 2019,
            price: 296900,
            carNumber: "ISMdU",
            ownerId: "26_IPfHU1",
          },
          {
            name: "3",
            year: 2010,
            price: 75100,
            carNumber: "9DJPw",
            ownerId: "26_IPfHU1",
          },
        ],
      },
      {
        brand: "toyota",
        models: [
          {
            name: "Land Cruiser",
            year: 2005,
            price: 80540,
            carNumber: "Kt-pW",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Corolla",
            year: 2019,
            price: 109100,
            carNumber: "YiYdI",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Hilux",
            year: 2019,
            price: 204000,
            carNumber: "DRmNw",
            ownerId: "26_IPfHU1",
          },
        ],
      },
      {
        brand: "Ford",
        models: [
          {
            name: "F250",
            year: 2020,
            price: 198500,
            carNumber: "g4Wfp",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Explorer",
            year: 2020,
            price: 265200,
            carNumber: "iNT8Q",
            ownerId: "26_IPfHU1",
          },
        ],
      },
      {
        brand: "Alpha romeo",
        models: [
          {
            name: "Spider",
            year: 2011,
            price: 75405,
            carNumber: "6t7QU",
            ownerId: "26_IPfHU1",
          },
          {
            name: "166",
            year: 2002,
            price: 12400,
            carNumber: "XMqpn",
            ownerId: "26_IPfHU1",
          },
        ],
      },
      {
        brand: "Chevrolet",
        models: [
          {
            name: "Impala",
            year: 2016,
            price: 65042,
            carNumber: "vbeAo",
            ownerId: "26_IPfHU1",
          },
          {
            name: "Savannah",
            year: 2016,
            price: 76505,
            carNumber: "WelWa",
            ownerId: "26_IPfHU1",
          },
        ],
      },
    ],
  });
});
