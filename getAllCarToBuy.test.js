
const { test, expect } = require("@jest/globals");
const carAgencyFunctions = require("./car_agency");
const getAllCarToBuy = carAgencyFunctions.getAllCarToBuy;
const currentCarMarket=require("./carMarketObj-withSellersOnly");


test("getAllCarToBuy", () => {
  expect(getAllCarToBuy(currentCarMarket)).toStrictEqual([
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
    },
    {
      name: 'X5',
      year: 2015,
      price: 218000,
      carNumber: '4Ixb0',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'X6',
      year: 2014,
      price: 97100,
      carNumber: 'kAnv-',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Z4',
      year: 2019,
      price: 296900,
      carNumber: 'ISMdU',
      ownerId: '26_IPfHU1'
    },
    {
      name: '3',
      year: 2010,
      price: 75100,
      carNumber: '9DJPw',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Land Cruiser',
      year: 2005,
      price: 80540,
      carNumber: 'Kt-pW',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Corolla',
      year: 2019,
      price: 109100,
      carNumber: 'YiYdI',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Hilux',
      year: 2019,
      price: 204000,
      carNumber: 'DRmNw',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'F250',
      year: 2020,
      price: 198500,
      carNumber: 'g4Wfp',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Explorer',
      year: 2020,
      price: 265200,
      carNumber: 'iNT8Q',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Spider',
      year: 2011,
      price: 75405,
      carNumber: '6t7QU',
      ownerId: '26_IPfHU1'
    },
    {
      name: '166',
      year: 2002,
      price: 12400,
      carNumber: 'XMqpn',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Impala',
      year: 2016,
      price: 65042,
      carNumber: 'vbeAo',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'Savannah',
      year: 2016,
      price: 76505,
      carNumber: 'WelWa',
      ownerId: '26_IPfHU1'
    },
    {
      name: 'X6',
      year: 2018,
      price: 548100,
      carNumber: 'EMW_7',
      ownerId: 'gNHjNFL12'
    },
    {
      name: '3',
      year: 2017,
      price: 178000,
      carNumber: 'XlnB4',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Prius',
      year: 2017,
      price: 101542,
      carNumber: '-RQgN',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Highlander',
      year: 2017,
      price: 202540,
      carNumber: 'AZJZ4',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Corolla',
      year: 1996,
      price: 5420,
      carNumber: 'kHE8f',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Corolla',
      year: 2012,
      price: 40570,
      carNumber: 'p2qEi',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Explorer',
      year: 2014,
      price: 127502,
      carNumber: 'Ty1zN',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'F350',
      year: 2012,
      price: 54250,
      carNumber: 'z03H2',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Savannah',
      year: 2010,
      price: 36504,
      carNumber: 'RXFZe',
      ownerId: 'gNHjNFL12'
    },
    {
      name: 'Malibu',
      year: 2009,
      price: 19585,
      carNumber: 'K5IsM',
      ownerId: 'gNHjNFL12'
    },
    {
      name: '8',
      year: 2020,
      price: 942500,
      carNumber: '4IUMz',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'X6',
      year: 2010,
      price: 129000,
      carNumber: 'Vw0fV',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'X3',
      year: 2019,
      price: 358100,
      carNumber: 'ufN54',
      ownerId: '9KeaYbRLP'
    },
    {
      name: '3',
      year: 2020,
      price: 389100,
      carNumber: 'F127X',
      ownerId: '9KeaYbRLP'
    },
    {
      name: '3',
      year: 2002,
      price: 18400,
      carNumber: 'ueZUp',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Prius',
      year: 2011,
      price: 38520,
      carNumber: 'AZJZ4',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Land Cruiser',
      year: 2019,
      price: 290040,
      carNumber: 'AZJZ4',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Hilux',
      year: 2020,
      price: 215700,
      carNumber: 'xig8N',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Hilux',
      year: 2015,
      price: 178506,
      carNumber: 'ghTiQ',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Corolla',
      year: 2002,
      price: 8504,
      carNumber: 'Mvw8T',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Impala',
      year: 2005,
      price: 9320,
      carNumber: 'BZpkt',
      ownerId: '9KeaYbRLP'
    },
    {
      name: 'Malibu',
      year: 2002,
      price: 4502,
      carNumber: 'KqKV_',
      ownerId: '9KeaYbRLP'
    },
    {
      name: '7',
      year: 1999,
      price: 24700,
      carNumber: 'sZrjp',
      ownerId: 'oqQmsZoUo'
    },
    {
      name: '3',
      year: 2008,
      price: 54000,
      carNumber: 'da88K',
      ownerId: 'oqQmsZoUo'
    },
    {
      name: 'Prius',
      year: 2019,
      price: 124050,
      carNumber: 'ZfbqH',
      ownerId: 'oqQmsZoUo'
    },
    {
      name: 'Hilux',
      year: 1996,
      price: 11540,
      carNumber: 'AZJZ4',
      ownerId: 'oqQmsZoUo'
    }
  ]);
});
