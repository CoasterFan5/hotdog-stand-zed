let item: number = 0;
const item2 = 5;
const isThisTrue = true;

const res = item + item2;
const func = (item: number, item2: string) => {
  const newNumber = parseFloat(item2) + item;
  return isNaN(newNumber) ? 0 : newNumber;
}; // this is a function

const stringLiteral = "asgasgag";
const secondString = `asf${func(0, "1")}`;

class Dog {
  private a = 0;
  constructor() {
    this.a = 1;
  }

  getA() {
    return this.a;
  }
}

const newString = `\n\/adpsigjsjg`;

enum Rarity {
  Common = 0,
  Uncommon = 1,
  Rare = 2,
  Mythic = 3,
  Legendary = 4,
}
