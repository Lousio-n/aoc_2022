import { readFileSync } from 'node:fs';

const content = readFileSync('input.txt').toString('utf-8');

let currentCalories = 0;
let topCalories = 0;

const splitContent = content.split('\n').forEach(line => {
  currentCalories += +line;
  if (line === '' && currentCalories > topCalories) {
    topCalories = currentCalories;
    currentCalories = 0;
  } else if (line === '') {
    currentCalories = 0;
  }
})

console.log(topCalories);