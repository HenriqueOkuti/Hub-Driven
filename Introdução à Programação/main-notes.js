/*  THIS IS A QUICK JAVASCRIPT REFERENCE GUIDE  */

/* The following is used to print statements onto the console   */

console.log("This is a print statement");
console.log("Note how we can perform operations inside");
console.log(74 + 36);

/*  To create functions simply use  */

function test_function() {
    return console.log("Hello, im the result of a function");
}
test_function();

/*  There are various types of variables and ways to declare them   */

let variable1 = 0;  /*  This is a simple numerical variable */
const pi_1 = 3.14159;   /*  This variable is a constant */

let i = 0;
function ticktickboom() {
    return console.log("The value of i is: ", i);
}

ticktickboom();

/*  We can do various math operations aswell    */

let x = 2;
let y = 3;

function mathisfun(x, y) {
    let sum = x + y;
    let subt = x - y;
    let mult = x * y;
    let div = x / y;
    let power = x ** y;
    let modulus = x % y;
    let answers = `Sum = ${sum} , Subt = ${subt} , Mult = ${mult} , Div = ${div} , ...`;
    return console.log(answers);
}

mathisfun(x, y)

/*  There's also the Math library to do cooler stuff    */

function coolermath(x, y) {
    sine_xy = Math.sin(x / y);
    console.log(`Sine (${x}/${y}) = ${sine_xy}`);
    /* rounding it  */
    console.log(`Rounding to the closest integer = ${Math.round(sine_xy)}`);
    console.log(`Rounding to the lowest integer = ${Math.floor(sine_xy)}`);
    console.log(`Rounding to the highest integer = ${Math.ceil(sine_xy)}`);

}

coolermath(x, y);


function randomnumber() {
    return console.log("This is a random number: ", Math.random());
}

randomnumber();

/*  We can algo manipulate strings, as one usually do   */

let creativestring1 = "This is a creative string";
let creativestring2 = "This is another creative string";
let concatenated_string = creativestring1 + creativestring2
console.log(creativestring1, `; whose length is ${creativestring1.length}`);
console.log(creativestring2, `; whose length is ${creativestring2.length}`);
console.log(concatenated_string, `; whose length is ${concatenated_string.length}`);

/*  Note that strings start at index 0 and keep going until its length minus 1  */
/*  other manipulations include */

console.log(creativestring1.toLowerCase());
console.log(creativestring2.toUpperCase());

/*  We can also convert variable types  */

let thisisanumber = 1234;

console.log(`The variable thisisanumber is ${typeof (thisisanumber)} and its value is ${thisisanumber}`);
console.log(`The variable thisisanumber is now a ${typeof (thisisanumber.toString())} and its value is ${thisisanumber.toString()}`);

/*  A common error occurs when parsing something with letters to convert to a number    */

let thisisnotanumber = 'abcd123';
console.log(`The variable thisisnotanumber is ${typeof (thisisnotanumber)} and its value is ${thisisnotanumber}`);
console.log(`The variable thisisnotanumber is now a ${typeof (Number(thisisnotanumber))} and its value is ${Number(thisisnotanumber)}`);

/*  When dealing with strings   */

let this_is_an_empty_string = "";
let this_is_a_string = "This is a String!";
let easy_string = "ThIs Is An EaSy StRiNg";

console.log(easy_string);
console.log(easy_string.toLowerCase()); /*  Turns all into lower case   */
console.log(easy_string.toUpperCase())  /*  Turns all into upper case   */

console.log(easy_string.indexOf("E"));  /*  Returns first index correspondent   */
console.log(easy_string.includes("Z")); /*  Returns boolean if includes   */

console.log(easy_string.slice(0, 4)); /* Slices between index 0 and index 4, not including 4 */

/* Conditional cases are easy to use */

let x_cond = 5;
let y_cond = 7;
let z_cond = 10;

if ((x_cond > y_cond || y_cond < z_cond) && z_cond === 10) {
    console.log(`x>y = ${x_cond > y_cond}`);
    console.log(`x<y = ${x_cond < y_cond}`);
    console.log(`x==y = ${x_cond == y_cond}`);
    console.log(`x!=y = ${x_cond != y_cond}`);
}
else if (z_cond > x_cond && z_cond > y_cond) {
    console.log("This should not trigger even if it's true due to being after the first conditional");
}

else {
    console.log("And since this condition is always false, we should not have to worry about this");
}

/*  Switch/Case structure may be usefull    */

let letter_switch = 'a'
switch (letter_switch) {
    case 'b':
    case 'B':
        console.log('This is the consonant B/b');   /* This is ignored since it's not a match */
        break;

    case 'a':
    case 'A':
        console.log("This is the vowel A/a");
        break;  /* w/ this break it'll proceed with all the following cases */

    case 150:
    case 'abcd':
        console.log("This will not trigger!");
        break;

}

/*  LOOPS   */

i = 0;
while (i != 4) {    /* While condition is true it'll repeat */
    console.log("This is a repeated instruction");
    i++;    /* don't forget to increment or you'll get an infinite loop */
}

i = 0;
do {
    console.log("This is a new repeated instruction");
    i++;
} while(i <= 4);

for (i = 0; i<=5 ; i++){        /* i is the outer loop variable */
for (j = 0; j<=i ; j++){        /* j is the inner loop variable */
    console.log(`i = ${i},j = ${j}`);
}
}

/*  ARRAYS  */

let empty_array = []
let filled_array = ["Tres", "Duo", "Unus", "Nihil"];

console.log(empty_array);
console.log(filled_array);

for (i=0; i<filled_array.length; i++){
    console.log(filled_array[i]);
}

filled_array.push("Bloodlost");  /* This appends a new entry into the array */

for (i=0; i<filled_array.length; i++){
    console.log(filled_array[i]);
}

filled_array.push(1);   /* Note how you can combine different data types inside the array */
console.log(filled_array);

i = 0;
let removed_from_array = [];
do {
    removed_from_array[i] = filled_array.pop(); /*  This is how we remove the last member of an array   */
    i++;        /*  You can choose not to store the removed dataset */
} while (i<2);  

console.log(filled_array);
console.log(removed_from_array);

/* Fun applications can be made combining everything from before */

const pi = Math.PI;
let sin_values = [];
let x_values = [];
x = 0;

for (i=0; i<10; i++){
    x = Math.random() * pi;
    x_values[i] = x;
    sin_values[i] = Math.sin(x); /*  Now if only we could plot this somehow */
}                                 

console.log (sin_values);