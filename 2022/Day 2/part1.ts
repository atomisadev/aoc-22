import { input, shapes } from "./input";

const rounds = input.map(([l, r]) => {
  const left = shapes[l];
  const right = shapes[r];
  const difference = Math.abs(left - right);

  if (left === right) return right + 3;
  else if ((difference === 1 && right > left) || (right === 1 && left === 3))
    return right + 6;
  else return right;
});

console.log(rounds.reduce((a, b) => a + b, 0));
