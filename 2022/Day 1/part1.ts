import { input } from "./input";
const sorted = input
  .map((e) => {
    return e
      .split("\n")
      .map((i) => parseInt(i, 10))
      .reduce((sum, v) => sum + v, 0);
  })
  .sort((x, y) => y - x);
console.log(sorted[0]);
