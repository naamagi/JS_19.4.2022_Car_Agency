const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const deleteCarOfCostumer = carAgencyFunctions.deleteCarOfCostumer;
const currentCarMarket=require("./carMarketObj-withCustomersOnly");



test("deleteCarOfCostumer example 1", () => {
  expect(deleteCarOfCostumer(currentCarMarket, "pAuFtn_WA", "2WU_y")).toStrictEqual([]);
});


test("deleteCarOfCostumer example 2", () => {
    expect(deleteCarOfCostumer(currentCarMarket, "cnTobUDy6", "Xxcy_")).toStrictEqual([
        {
          name: 'Hilux',
          year: 2005,
          price: 35005,
          carNumber: 'VSCUj',
          ownerId: 'cnTobUDy6'
        }
      ]);
  });
  