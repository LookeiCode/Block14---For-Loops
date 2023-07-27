// ONLY ODDS

const array = [2, 4, 6, 8, 11, 20, 15, 22];
const oddNums = [];

for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num % 2 === 1) {
        oddNums.push(num);
    }
}

console.log(oddNums);

// VOWELS V.S CONSONANTS

const stringArray = "hello";
let vowels = 0;
let consonants = 0;

for (let i = 0; i < stringArray.length; i++) {
    const char = stringArray[i];

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowels++;
    }
    else {
        consonants++;
    }
}
console.log(`${stringArray} has ${consonants} consonants and ${vowels} vowels.`)

// REVERSE ARRAY

const arrayR = [1, 2, 3]
const reversed = [];

for (let i = arrayR.length - 1; i >= 0; i--) {
    const num = arrayR[i];

    reversed.push(num);
}
console.log(reversed);

// FIZZ BUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}