const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getAllAgenciesNames = carAgencyFunctions.getAllAgenciesNames;
const currentCarMarket=require("./carMarketObj-withSellersOnly");


test("getAllAgenciesNames", () => {
  expect(getAllAgenciesNames(currentCarMarket)).toStrictEqual(["Best Deal","CarMax","The Auto World","Car Werks","Carsova"]);
});
