/**
 * implicit conversion = also known as type coercion where js itself will automatically convert the type
 *
 * 
 */

// console.log(2 + "3"); //implicit conversion to string
// console.log(3 - "2"); //implicit conversion to number
// console.log(3 * "2"); //implicit conversion to number
// // with non-numeric strings, NAN is returned
// console.log("Bruce" - "Wayne");

// console.log("5" - true); //5 - 1
// console.log("5" - false); //5 - 0
// console.log("5" - null); //5 - 0
// console.log('5' + undefined); //implicit conversion to string
// console.log('5' - undefined); 


//explicit conversion where you manually convert the type
console.log(Number('5'))
console.log(parseFloat('5.14'))
console.log(String('5000'))
console.log(String(null))
console.log((500).toString())
console.log(Boolean(10)) // null undefined 0 '' NaN return false others return true
console.log(Boolean(null))
console.log(Boolean('  '))
console.log(Boolean(''))