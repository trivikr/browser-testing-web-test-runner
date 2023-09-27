export const add = (...numbers: number[]) =>
  numbers.reduce((sum, number) => sum + number, 0);
