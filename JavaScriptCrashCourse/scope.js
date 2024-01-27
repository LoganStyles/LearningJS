/**
 * scope basically determines the accessibility or visibility of variables
 *
 * BLOCK SCOPE
 * introduced in 2015 with the use of let & const keywords
 *  - variables declared inside curly braces
 *  - cannot be accessed outside the braces
 * 
 * 
 * FUNCTION SCOPE
 *  - variables declared inside the function
 *  - are not accessible outside the function
 * 
 * GLOBAL SCOPE
 *  - the scope outside any block or function
 *  - its accessible both inside a block & a fn
 */

const myNum = 100
const myName ='Superman' //does not override block or fn scopes
//BLOCK SCOPE example
if(true){
    const myName = 'emma'
    console.log(myNum)
}
// console.log(myName) //throws error

//FUNCTION SCOPE EXAMPLE
function testFn(){
    const myName = 'Batman'
    console.log(myName)
    console.log(myNum)
}

// console.log(myName2) //throws error
testFn()
