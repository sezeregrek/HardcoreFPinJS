const {
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  sanitizeNames,
  availablePrices,
  fastestCar
} = require("./start"); //finish

// Example Data
const CARS = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
  },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false
  }
];

test("Ex1: isLastInStock", () => {
  expect(isLastInStock(CARS)).toBe(false);
});

test("Ex2: nameOfFirstCar", () => {
  expect(nameOfFirstCar(CARS)).toBe("Ferrari FF");
});

test("Ex3: averageDollarValue", () => {
  expect(averageDollarValue(CARS)).toBe(790700);
});

test("Ex4: sanitizeNames", () => {
  expect(sanitizeNames(CARS)).toStrictEqual([
    "ferrari_ff",
    "spyker_c12_zagato",
    "jaguar_xkr_s",
    "audi_r8",
    "aston_martin_one_77",
    "pagani_huayra"
  ]);
});

test("Bonus 1: availablePrices", () => {
  expect(availablePrices(CARS)).toBe("$700,000.00, $1,850,000.00");
});

test("Bonus 2: fastestCar", () => {
  expect(fastestCar(CARS)).toBe("Aston Martin One-77 is the fastest");
});
