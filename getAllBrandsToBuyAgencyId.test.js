const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getAllBrandsToBuyAgencyId = carAgencyFunctions.getAllBrandsToBuyAgencyId;
const currentCarMarket=require("./carMarketObj-withSellersOnly");

test("getAllBrandsToBuyAgencyId example 1", () => {
  expect(getAllBrandsToBuyAgencyId(currentCarMarket, "Plyq5M5AZ")).toStrictEqual([ 'bmw', 'toyota', 'Ford', 'Alpha romeo', 'Chevrolet' ]);
});

test("getAllBrandsToBuyAgencyId example 2", () => {
  expect(getAllBrandsToBuyAgencyId(currentCarMarket, "Plyq5M5A")).toBe(undefined);
});
