/**
 *  == (Allows coercion)
 * === (Does not allow coercion)
 */

// const var1 = 'test'
// const var2 = 'test'
//when types are the same there is no confusion
// console.log(var1 == var2) //true
// console.log(var1 === var2) //true

// const var1 = 10
// const var2 = '10'
// //here the values are of different types
// console.log(var1 == var2) //true
// console.log(var1 === var2) //false

// const var1 = false
// const var2 = ''
// //here the values are of different types
// console.log(var1 == var2) //true
// console.log(var1 === var2) //false

const var1 = null;
const var2 = undefined;
//here the values are of different types
console.log(var1 == var2); //true
console.log(var1 === var2); //false
