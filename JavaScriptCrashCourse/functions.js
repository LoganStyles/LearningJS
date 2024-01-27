function greet(username) {
  console.log("Good morning " + username);
}

function add(a, b) {
  return a + b;
}

const sum = add(25, 25);
console.log(sum);

const arrowSum = (a, b) => {
  return a + b;
};

const sum2 = arrowSum(5, 5);
console.log(sum2);

// u can omit the parenthesis
// when u have just one argument
const addfive = (num) => num + 5;
console.log(addfive(60));

// nested functions
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
