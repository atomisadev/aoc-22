import { input } from "./input";
console.log(
  input
    .map((e) => {
      return e
        .split("\n")
        .map((i) => parseInt(i, 10))
        .reduce((sum, v) => sum + v, 0);
    })
    .sort((x, y) => y - x)[0]
);
