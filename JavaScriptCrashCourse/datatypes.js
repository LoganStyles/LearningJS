/**
 * 2 types of Data types
 * 1- PRIMITIVE
 * - string type
 * - number type
 * - boolean type
 * - undefined type
 * - null type
 * - bigint type - a recent addition, an int value larger than what number dt can hold
 * - symbol type - a recent addition(2015), a unique & unchangeable value
 *
 * NON- PRIMITIVE
 *  - object - a collection of values
 */

//string
const name = "emman";
const language = "javascript";

//number
const total = 0;
const PI = 3.14;

//boolean
const isPrimay = true;

//undefined - represents variable whose values are not defined
let result;
console.log(result);

// u can set undefined explicitly
const res = undefined;
console.log(res);

//null - reps empty or unknown value
const data = null;

//object - a complex dt, containing props defined as key-value pairs
// - the key can only b string or symbol dt while value can b any dt
// keys may have quotes or not
// below is an object literal
const person = {
  firstname: "bandaras",
  lastname: "ant",
  age: 30,
};
console.log(person.firstname);

// we also have arrays
const oddNumbers = [1, 3, 5, 6];
// we use position of the item to access it
console.log(oddNumbers[0]);

/**
 * js is a dynamically typed language, u dont have to
 * specify the dt of d variable upon declaration.
 * d dt are automaticlly converted during execution
 *
 *
 */
let a = 10
a="emma"
a=true
console.log(a)
