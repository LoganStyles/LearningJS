/**
 * the js 'this' keyword which is used in a function,
 * refers to the object it belongs to. 
 * it makes functions reusable by letting you decide
 *  the object value, this value is determined entirely
 * by how a function is called.
 */

function sayMyName(name){
    console.log(`My name is ${name}`)
}
sayMyName('Walter white')
sayMyName('philip collings')

//HOW TO DETERMINE `this`
/**
 * Implicit binding
 * Explicit binding
 * New binding
 * Default binding
 */