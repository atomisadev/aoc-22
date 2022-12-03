import { input, shapes } from "./input";

const rounds = input.map(([l, r]) => {
  const left = shapes[l];

  if (r === "X") {
    let right = left - 1 || 3; // 0, loop 3 (paper)
    return right;
  } else if (r === "Y") {
    return left + 3; // Draw
  } else {
    let right = (left + 1) % 3 || 3; // Win; loop 3 (paper)
    return right + 6;
  }
});

console.log(rounds.reduce((a, b) => a + b, 0));
