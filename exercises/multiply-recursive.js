'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :

function multiply(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return 0;
  } else if (num2 < 0) {
    return -num1 + multiply(num1, num2 + 1);
  } else {
    return num1 + multiply(num1, num2 - 1);
  }
}

// let multiply = (a, b) => {
//   return (a + multiply (a, b-1))
// }
// const countTo10 = count => {
//   if (count < 10) {
//     console.log('counter at', count)
//     countTo10(count + 1) // call itself with the updated value of count
//   }
// }
// const timesR = (a, count, result) => (count < a)? timesR(b, count + 1, result + b) : result
// const times5 = n => timesR(n, 0, 0)
// const times5 = (a,b) => timesR (a, 0, a)



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
