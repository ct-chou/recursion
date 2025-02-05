#!/usr/bin/env node

const fibs = (num) => {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }
    sequence = [0,1];
    for( let i = 2; i <= num; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);    
    }
    return sequence;
}

console.log("iterative");
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));


const fibsRecursive = (num) => {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }
    const sequence = fibsRecursive(num - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}

console.log("recursive");
console.log(fibsRecursive(0));
console.log(fibsRecursive(1));
console.log(fibsRecursive(2));
console.log(fibsRecursive(8));

