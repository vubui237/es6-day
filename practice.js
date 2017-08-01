
///////////////////
/* LET AND CONST */
///////////////////


// Rewrite the following line so that inner is scoped to the if statement.
if (inner) {
	var inner = "Inner!";
}

// declare a variable named noChange that cannot be re-assigned and give it a value of 100.
const noChange = 100;

// declare a new constant named vocab with the value of [ "let", "var", "destructuring", "spread", "rest" ]
const vocab = ['let', 'var', 'destructuring', 'spread', 'rest']

// change "var" to "const" at index 1 of vocab
vocab[1] = 'const'

// add "arrow function" to the end of vocab
vocab.push('arrow function')


///////////////////////
/* TEMPLATE LITERALS */
//////////////////////

// Declare 2 new variables, first and last, and assign them your first and last name.
let first = "Vu";
let last = "Bui";


// Declare the variable fullName and set it equal to your full name using template literals
let fullName = `${first} ${last}`


//////////////////////
/* OBJECT LITERALS */
/////////////////////

// create a new object named me with the properties first, last, learnES6, and lovesDevMountain
// first and last should use object literal shorthand (with the variables created above),
// and lovesDevMountain should be set to true.
// learnES6 should be a method created with object method shorthand that returns "This is awesome!"

let me = {
	first: first,
	last: last,
	learnES6: ()=>{ return "This is awesome"},
	lovesDevMountain: true,
}

// using computed property names create a new object named flipped where the keys are your first and last name
// and the values are "first" and "last"
let flipped = {
	"Vu" : "first",
	"Bui" : "last"
}

//////////////////////////////
/* ASSIGNMENT DESTRUCTURING */
//////////////////////////////

// do not modify
const destructuring = {
	objects: true
	, arrays: true
	, numbers: false
};

// using assignment destructuring create two new variables, objects and arrays,
// with the values taken from the above object
const {objects} = destructuring;
const {arrays} = destructuring;



// do not modify
const vocabAgain = [ "let", "const", "destructuring", "spread", "rest", "arrow function" ];

// using assignment destructuring, create three variables notVar, alsoNotVar, and everythingElse
// notVar should be "let", alsoNotVar should be "const", and everythingElse should contain the rest of the array.
let notVar, alsoNotVar, everythingElse;
[notVar, alsoNotVar, ...everythingElse] = vocabAgain;
// let {let} = notVar;
// const {const} = alsoNotVar;
// const {destructuring,spread,rest,arrow function} = everythingElse


////////////
/* ARRAYS */
////////////

// do not modify
const firstThree = [ 1, 2, 3 ];
const lastFive = [ 6, 7, 8, 9, 10 ];

// using the spread operator, create a new array named oneThroughTen.
// You should use the above arrays (and 2 missing digits of your own)
let oneThroughTen = [...firstThree, 4,5, ...lastFive];

// do not modify
const jsVersions = [ "es5", "es6", "es2017 onward" ];
function whatToUse( past, present, future ) {
	console.log( `Use ${ past } when supporting older browsers natively.` );
	console.log( `Use ${ present } when browser support is not an issue, or you can transpile your code.` );
	console.log( `Use ${ future } carefully! It may change before being finalized.` );

	return present;
}

// using the spread operator, pass each element of jsVersions as an individual argument to whatToUse
// and save the return value in a variable named currentJS.
let currentJS = whatToUse(...jsVersions)


///////////////
/* FUNCTIONS */
///////////////

// modify greeter to greet Anonymous if no name is passed.
function greeter( name ) {
	if(!name) {
		name = 'Anonymous'
	}
	return `Hi ${ name }!`
}


// write a function named toPower that takes two arguments, a number and an exponent,
// and returns number to the power of exponent.
// if no exponent is passed, the exponent should be two
toPower = (num,exp) => {
	if(!exp) {
		exp=2;
	}
	return num ** exp;
}


// using rest parameters, write a function named evenOdd that takes in
// any number of parameters and returns an object with two properties - even and odd.
// this function should check each parameter and push it to the appropriate property.
evenOdd = (...stuff)=> {
	let kitkat = {
		even: [],
		odd: []
	}
	stuff.map((x)=> {x%2 == 0 ? kitkat.even.push(x) : kitkat.odd.push(x);})
	return kitkat;
}


// write a function named multiply that takes in a num parameter and an arbitrary amount of
// additional numbers. This function should return an array of each additional number
// multiplied by num.
multiply = (num, ...kitkats) => {
	var katkat = [];
	kitkats.map((x) => {katkat.push(x*num);})
	return katkat;
}



// do not modify
const bits = [ 2, 4, 8, 16, 32, 64, 128 ];

// using an arrow function and the built in .map method, create a new array
// named mooresBits. mooresBits should be the bits array doubled.
var mooresBits = [];
bits.map((x) =>{
	mooresBits.push(x*2);
})

// do not modify
const that = {
	bind: "returns a function definition with the specified context"
	, call: "invokes a function with the specified context"
	, apply: "invokes a function with the specified context, passing an array of arguments individually"
}

// using an arrow function, add a property named arrow that returns the window object
// do this without using the window keyword. HINT: The default binding of the this keyword
	that['arrow'] = () => { return this;};