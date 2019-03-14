'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
  let tab = string.split(" ");
  for (var m in tab) {
    tab[m] = tab[m].substr(0, 1).toUpperCase() + tab[m].substr(1, tab[m].length).toLowerCase();
  }
  string = tab.join(" ");
  return (string);
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('coucou les gEns'), 'Coucou Les Gens')
// End of tests */
