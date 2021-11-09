//alert('Hello World');

/*consle
console.log('Hello World');
console.error('Hello World');
console.warn('Hello World');
*/

//let, const

/*let age = 30;
age = 13;
console.log(age)*/

/*const age = 13;
//const: constant
console.log(age);*/

/*let score;
score = 10;
console.log(score);*/

// We can't reassign const and score can't be reinitialized
/*const score;
score = 10;
console.log(score);*/

// 5 Basic DATATYPES
// String, Number, Boolean, Undefined, Null

/*const name = 'Harshavardhan';
const age = 13;
const height = 5.5;
const isCool = true;
const x = null;//typeof null evaluates to 'object'
const y = undefined;
let z;//not defined(not assigned the value)*/

/*console.log(typeof name);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);*/

/*const name = 'Harshavardhan'
const age = '13'

//Concatenation
console.log('My name is ' + name + ' and I am ' + age)//old method
//Template
console.log(`My name is ${name} and I am ${age}`)
const hello = `My name is ${name} and I am ${age}`
console.log(hello)*/

//If we want to know the length of the string we can use console.log(varname.length)
//If we want to change the case of the string from lowercase to uppercase we can use console.log(varname.toUpperCase())
//If we want to change the case of the string from uppercase to lowercase we can use console.log(varname.toLowerCase())

/*const a = 'Hello World!'
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

console.log(a.substring(0,12));
console.log(a.split(''));

const datatypes = 'String, Number, Boolean, Null, Undefined, Symbol, Object, BigInt'
console.log(datatypes.split(', '));*/

//Arrays - Variables that hold multiple values
/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3]='grapes';
console.log(fruits);*/
//If we use 👇🏻 this we will get a error
           // fruits = [];
//If we want to add a value on to the end we can use varname.push('value');
//If we want to add a value on to the beginning we can use varname.unshift('value');
//If we want to remove a value at the end we can use varname.pop();
//If we want to remove a value at the beginning we can use varname.shift(); [not included in the course]
//If we want to check if something is an Array we can use console.log(Array.isArray('fruits'));
//If we want to know the index of certain value we can use console.log(fruits.indexOf('oranges'));
