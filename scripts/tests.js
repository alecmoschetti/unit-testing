export function capFirstString(str) {
    return str.substring(0, 1).toUpperCase().concat(str.slice(1));
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
    addA: 1,
    addB: 1,
    subtractA: 10,
    subtractB: 5,
    divideA: 100,
    divideB: 4,
    multiplyA: 5,
    multiplyB: 5,
};

/* caesar helper function */
function isUpperCase(str) {
    return str === str.toUpperCase();
}

function isSpaceOrPunctuation(str) {
    return /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g.test(str) || /\s/.test(str);
}

/* main caesar function */
export function caesar(str, key) {
    let cipher = '';
    for(let i = 0; i < str.length; i++) {
        if (isSpaceOrPunctuation(str[i])) {
            cipher += String.fromCharCode(str.charCodeAt(i));
        } else if(isUpperCase(str[i])) {
            cipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
        } else {
            cipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }
    return cipher;
}

/* array analysis helper functions */
function findAverage(arr) {
    const addedUp = arr.reduce((acc, cur) => acc + cur);
    const average = addedUp / arr.length;
    return average;
}

function findMin(arr) {
    const min = arr.reduce((acc, cur) => (acc > cur) ? cur : acc);
    return min;
}
function findMax(arr) {
    const max = arr.reduce((acc, cur) => (acc > cur) ? acc : cur);
    return max;
}
/* Array analysis function */
export function analyzeArray(arr) {
    let analysis = {};
    if (arr.length > 0) {
        analysis = {
            average: findAverage(arr),
            min: findMin(arr),
            max: findMax(arr),
            length: arr.length
        };
    }
    return analysis;
}