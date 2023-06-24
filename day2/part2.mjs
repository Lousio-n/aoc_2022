import { readFileSync } from 'node:fs';

const content = readFileSync('input.txt').toString('utf-8');

let totalScore = 0;
const win = 6;
const draw = 3;

const splitContent = content.split('\n').forEach(line => {
  const pair = line.split(' ');
  let decision;
  if (pair[1] === 'X') decision = decideX(pair[0]);
  if (pair[1] === 'Y') {
    totalScore += draw;
    decision = pair[0];
  }
  if (pair[1] === 'Z') {
    totalScore += win;
    decision = decideZ(pair[0]);
  }
  scoreForDecision(decision);
})

function scoreForDecision(a) {
  if (a === 'A') totalScore += 1;
  if (a === 'B') totalScore += 2;
  if (a === 'C') totalScore += 3;
}

function decideX(a) {
  if (a === 'A') return 'C';
  if (a === 'B') return 'A';
  if (a === 'C') return 'B'; 
}

function decideZ(a) {
  if (a === 'C') return 'A';
  if (a === 'A') return 'B';
  if (a === 'B') return 'C';   
}

console.log(totalScore);