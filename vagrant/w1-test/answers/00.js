



const Alert = (function() {
  let messages = [];
  return {
      add: function(message) {
          messages.push(message);
      }
      log: function() {
          console.log(messages);
      }
  };
})();

console.log(Alert);
Alert.add("hello there!");













/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  let numOfItems = arr.length;
  return numOfItems;
};
// count([1, 3, 4]);
/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  let total = 0;
  for (let num of arr) {
    total = total + num;
    return total;
  }
  sum([2, 4, 5]);



// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  /* IMPLEMENT ME */
  let total = 0;
  let num = arr[num];
  for (let num of arr) {
    total = total + num;
    return arrTotal /total;
};

// Don't change below:
module.exports = { count, sum, mean };
