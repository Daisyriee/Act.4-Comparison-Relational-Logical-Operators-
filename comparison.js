//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 16;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 13;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 16;
let y = 22;
let z = 69;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "snowy";
let b = "stormy";
let c = "snowy";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isHappy = true;
let isScary = false;

console.log(!isHappy); //false
console.log(!isScary); //true

console.log(!isHappy && isScary)); //false
console.log(isHappy && !isScary)); //true
console.log(isHappy || isScary)); //true
console.log(!isHappy || isScary)); //false
console.log(isHappy == isScary)); //false
console.log(isHappy == !isScary)); //true
