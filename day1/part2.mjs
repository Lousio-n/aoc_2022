import { readFileSync } from 'node:fs';

const content = readFileSync('input.txt').toString('utf-8');

const allCalories = [];
let currentCalories = 0;
let finalArray = [];

const splitContent = content.split('\n').forEach(line => {
  currentCalories += +line;
  if (line === '') {
    allCalories.push(currentCalories);
    currentCalories = 0;
  }
})

function combineTop() {
  allCalories.sort(function(a, b) {
    return a - b;
  });
  finalArray = allCalories.reverse().slice(0, 3);
  return finalArray.reduce((a, b) => a + b, 0);
}

console.log(combineTop());