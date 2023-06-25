import { readFileSync } from 'node:fs'

const content = readFileSync('input.txt').toString('utf-8');

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersArray = letters.split("");

let totalSum = 0;
let tempArray = [];

const splitContent = content.split('\n').forEach(line => {
    if (tempArray.length === 3) {
        findBadge(tempArray);
        tempArray = [];
        tempArray.push(line);
    } else {
        tempArray.push(line);
    }
})

function findBadge(array) {
    let one = array[0].toString().split("");
    let two = array[1].toString().split("");
    let three = array[2].toString().split("");
    for (let letter of lettersArray) {
        if (one.includes(letter) && two.includes(letter) && three.includes(letter)) {
            totalSum += lettersArray.indexOf(letter) + 1;
        }
    }
}

console.log(totalSum);