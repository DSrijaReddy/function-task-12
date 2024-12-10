// 1. How would you define a function that takes two numbers
//  as parameters and returns their sum?

function Twonumberssum(a,b){
    return(a+b);

}
var value=Twonumberssum(6,7)
console.log(value);

// 2. If you define a function that accepts a string as a parameter,
//  how would you modify it to print the string in uppercase?

function printUpperCase(str) {
    console.log(str.toUpperCase());
}

printUpperCase("sreejareddy");



// 3. In JavaScript, what happens if you pass an undefined value
//  as an argument to a function that expects a parameter?

function Number(value){
    console.log(value);
}
Number();


// 4. Suppose you have a function that takes an array as a parameter.
//  How would you check inside the function if the array is empty?

function Empty(arr){
    if(arr.length===0){
        console.log("empty array");
    }
    else{
        console.log("not empty");
    }
}
Empty([]);

// 5. write a function that takes two numbers as
//  parameters and returns their difference.

function Number(a,b){
    return(a-b);
}
var difference=Number(30,50);
console.log(difference);

// 6.Define a function that accepts a name and age as parameters, and returns
//  a string with a greeting like "Hello, [name]! You are [age] years old."
function Greeting(name,age){
    str=`Hello, ${name}! you are ${age} years old`;
    return str;
}
var str=Greeting("Sreejareedy",21)
console.log(str);


// 7. Write a function that takes a number as a parameter and returns
//  true if the number is a even number, otherwise false.

function Numberiseven(number){
    if(number % 2 == 0){
        console.log("True");
    }
    else{
        console.log("Flase");
    }
}
Numberiseven(12);