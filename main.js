console.log('Hello World');

/* const age = 30; 
age = 31; // Error due to const variable change attempt
console.log(age);
*/ 

let score;
score = 10;
console.log(score);

// Data Types - String, Numbers, Boolean, null, undefined, Symbols
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 

console.log(typeof name);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 7));
console.log(s.substring(0, 7).toUpperCase());
console.log(s.split(''));

const t = 'technology, computers, it, code';
console.log(t.split(', '));

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes'; // not the best method, if added amount is unknown
fruits.push('mangos'); // adds mangos to the end
fruits.unshift('strawberries');
// fruits.pop(); - removes the end, which would be 'mangos' in this case
console.log(Array.isArray(fruits)); // to check if it's an Array
console.log(Array.isArray('hello')); // String reults in False
console.log(fruits.indexOf('oranges')); // 2
console.log(fruits);

// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}
console.log(person.firstName, person.lastName); // separate different logs by commas
console.log(person.hobbies[1]); // get the value of 'movies'
console.log(person.address.city); // gets 'Boston'
const { firstName, lastName } = person;
console.log(firstName);


// Arrays of Object

const toDos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];
console.log(toDos);
console.log(toDos[1].text); // gets 'Meeting with boss'

// For Loops
for(let i = 0; i <= 10; i++) {
    console.log(i);
    // console.log(`For Loop Number: ${i}`); - gets For Loop variable interation w/number
}

// While Loops
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++ // add increment otherwise will be a neverending loop
}

// forEach, map, filter
toDos.forEach(function(toDo) {
    console.log(toDo.text);
});

const toDoText = toDos.map(function(toDo) { // map returns an array
    return toDo.text;
});
console.log(toDoText);

const toDoCompleted = toDos.filter(function(toDo) {  
    return toDo.isCompleted === true;
}).map(function(toDo){
    return toDo.text;
})
console.log(toDoCompleted);

// Conditionals

const q = 5;

if(q === 10) {
    console.log('q is 10');
} else if(q > 10) {
    console.log('q is greater than 10');
} else {
    console.log('q is less than 10'); 
}

// Ternary Operator

const r = 11;
const color = r > 10 ? 'red' : 'blue'; //EX: change to green 
console.log(color); // results in red

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
} //EX: then color is not red or blue

// Functions

function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5,4));

// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.getBirthYear());
console.log(person1.getFullName());


/* Question: Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.*/

// Example var firstNameLength = 0; var firstName = "Ada";

firstNameLength = firstName.length;

// Setup var lastNameLength = 0; var lastName = "Lovelace";

// Only change code below this line.

var lastNameLength = 0;
var lastName = "Lovelace";
