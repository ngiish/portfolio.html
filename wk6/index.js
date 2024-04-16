console.log("Hello World!");
console.log("My name is Ngish");
console.log("I am 24 years old.");
console.log("I am a student at PLP Academy");

let greeting = "Hello and peace unto the world!";
let salutations = "Blah blah salutations everyone!!!";

console.log(greeting);
console.log(salutations);

let colors = ['red', 'green', 'blue',];
console.log("These are the primary colors in color tvs: " + colors);

colors.push('black');
console.log(colors);

colors.shift();
console.log(colors);

colors.unshift('yellow');
console.log(colors);

colors.splice(1,2, 'blue', 'green');
console.log(colors);

let grade = "B";

if(grade == 'A') {
    console.log("you got an A, so here is a Chocolate for you!");
} else if(grade == 'B') {
    console.log("You got a B, here's a cookie for you!");
} else if(grade == 'C') {
    console.log("You got a C, there's room for improvement and here's your Candy!")
} else {
    console.log("No reward!")
}

function calculateSquare(s) {
    let area = s*s;
    let perimeter = s*4;
   
    console.log('The side is ' + s + ' units');
    console.log('The area is ' + area + ' units squared' );
    console.log('The perimeter is ' + perimeter + ' units');    
}
calculateSquare(10)