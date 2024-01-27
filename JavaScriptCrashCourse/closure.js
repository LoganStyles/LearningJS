/**
 * MSN defines a closure as the combination of a function bundled together with references to its surrounding state.
 * closures are created every time a function is created, at functionn created time.
 *
 * alternative definition
 * - in Js, when we return a fn from another fn, we are effectively returning a combination of the function along
 * with the function's scope. this would let the function definition have an associated persistent memory which could
 * hold on to live data between executions. that combination of the fn & its scope chain is what is
 * called a closure in js
 */

// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// // here we call the outer fun twice
// outer();
// outer();

// rather than executing the inner fn we can return it
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
// calling fn twice stores
const fn = outer();
// fn();
// fn();

/**
 * FUNCTION CURRYING
 * currying is a process in functional programming in which we
 * transform a function with multiple arguments into a sequence
 * of nesting functions that take one argument at a time.
 * function f(a,b,c) is transformed to f(a)(b)(c)
 */

function sum(a, b, c) {
  return a + b + c;
}
// console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))
