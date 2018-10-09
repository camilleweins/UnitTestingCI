// adding something to see if it will force a build

function sum(a, b) {
  return a + b;
}

function sayHelloTo(username){
  return "Hello, " + username + "!";
}

function sub(a, b){
  return a - b;
}

function prod(a, b) {
  return a * b;
}

function answer() {
  return 42;
}

function digital_root(n) {
  return (n-1)%9+1;
}
function sum42(a, b) {
  return a + b + 42;
}

function anomalyCode(x) {
  return '5' + x - x;
}


function fahrenheit2Celcius(F) {
  return (F - 32) * 5 / 9;
}
function anomalyCode(x) {
  return '5' + x - x;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function nOfFibonacci(x) {
  let n = parseInt(x, 10);
  return (!n || n < 1) ? -1 : (n < 3 ? 1 : (nOfFibonacci(n-1) + nOfFibonacci(n-2)));
}

// shuffle an array using the Fisher-Yates algorithm
// retyped from https://stackoverflow.com/a/6274398
function shuffleArray(array) {
  // first, clone the array
  const new_array = array.slice(0);
  // we start counting from the end
  let currentIndex = array.length;

  // while we still have elements to shuffle
  while ( currentIndex > 0 ) {
    // pick a random element (from the remaining ones)
    let randomIndex = Math.floor( Math.random() * currentIndex );
    // move the index
    currentIndex -= 1;
    // we hold the value we're going to replace
    let temporaryValue = new_array[currentIndex];
    // replace the last element with the random one
    new_array[currentIndex] = new_array[randomIndex];
    // and put the value held in the random element's position
    new_array[randomIndex] = temporaryValue;
  }

  return new_array;
}

function iThink(thisThing, thatThing) {
  return "I think " + thisThing + " but " + thatThing + ".";
}

function milesToKilometers (miles) {
if (miles != null)
 return miles * 1.609344;
console.log(miles * 1.609344);
}

function loveMy(myLove) {
  return "I love my " + myLove + "<3";
}

module.exports = {
  sum: sum,
  sub: sub,
  prod: prod,
  sum42: sum42,
  digital_root: digital_root,
  sayHelloTo: sayHelloTo,
  answer: answer,
  anomalyCode: anomalyCode,
  fahrenheit2Celcius: fahrenheit2Celcius,
  power: power,
  nOfFibonacci: nOfFibonacci,
  shuffleArray: shuffleArray,
  iThink: iThink,
  milesToKilometers : milesToKilometers,
  loveMy: loveMy
}
