console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');


// output
A
D
C
B

// Q1 Explain: Explanation: Synchronous statements execute first, so A and D print first. The Promise callback runs next as a microtask, followed by the setTimeout callback in the timer phase. A zero-millisecond timer does not execute immediately.



// Q2


const { add, subtract } = require('./calc');

console.log("Addition:", add(4, 5));
console.log("Subtraction:", subtract(4, 5));
