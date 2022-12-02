import { input } from "./input";

const sorted = input
  .map((elf) => {
    return elf
      .split("\n")
      .map((i) => parseInt(i, 10))
      .reduce((sum, v) => sum + v, 0);
  })
  .sort((a, b) => b - a);

console.log(sorted.slice(0, 3).reduce((sum, v) => sum + v, 0));
