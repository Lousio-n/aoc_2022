import { readFileSync } from 'node:fs';

const content = readFileSync('input.txt').toString('utf-8');

let totalScore = 0;
const win = 6;
const draw = 3;

const splitContent = content.split('\n').forEach(line => {
  const pair = line.split(' ');
  if (pair[1] === 'X') totalScore += 1
  if (pair[1] === 'Y') totalScore += 2
  if (pair[1] === 'Z') totalScore += 3
  rockPaperScissor(pair[0], pair[1])
})

function rockPaperScissor(a, b) {
  if (a === 'B' && b === 'Y') totalScore += draw
  if (a === 'A' && b === 'X') totalScore += draw
  if (a === 'C' && b === 'Z') totalScore += draw
  if (a === 'A' && b === 'Y') totalScore += win
  if (a === 'B' && b === 'Z') totalScore += win
  if (a === 'C' && b === 'X') totalScore += win
}

console.log(totalScore);