import { readFileSync } from 'node:fs'

const content = readFileSync('input.txt').toString('utf-8');

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersArray = letters.split("");
let totalSum = 0;

const splitContent = content.split('\n').forEach(line => {
    let lineMiddle = line.toString().length / 2;
    let compartment1 = line.toString().slice(0, lineMiddle);
    let compartment2 = line.toString().slice(lineMiddle);
    compareCompartments(compartment1, compartment2);
})

function compareCompartments(a, b) {
    lettersArray.forEach(char => {
        if (a.includes(char) && b.includes(char)) 
            totalSum += letters.indexOf(char) + 1;
    })
}

console.log(totalSum);