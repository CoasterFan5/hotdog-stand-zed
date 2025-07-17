let item = 0;
const item2 = 5;
const res = item + item2;
const func = (item: number, item2: string) => {
  const newNumber = parseFloat(item2) + item;
  return isNaN(newNumber) ? 0 : newNumber;
}; // this is a function

const stringLiteral = "asgasgag";
const secondString = `asf${func(0, "1")}`;
