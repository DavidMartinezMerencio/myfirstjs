//alert("Hello to JS");
var table = "Normal Table";  //Global
let chair = "One chair";     //Local
console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

table = true;
console.log(table);

let testNumber = 10;
console.log(testNumber);

let testString = 'text';
console.log(testString);
testString = "text2";
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

let testStringObject = new String('text');
console.log(testStringObject);

let pName = "John";
let pSurname = "Doe";
let question = "How are you " + pName + " " + pSurname + "?";
console.log(question);

let age = 23;
question = `How old is ${pName} ${pSurname}?`;//Backtick
let answer = 'He is ' + age + ' years old';
console.log(question);
console.log(answer);

question = 'How are you '.concat(pName)+' '.concat(pSurname).concat("?");
console.log(question);

let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let res = operator_a - operator_b;
let mult = operator_a * operator_b;
let div = operator_a / operator_b;
console.log(sum);
console.log(res);
console.log(mult);
console.log(div);

operator_a = 3;
operator_b = 3;
let expo = operator_a ** operator_b;
let incr = operator_a++;
let decr = operator_a--;
console.log(expo);
console.log(incr);
console.log(decr);

let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull = null;
console.log(testNull);
console.log(typeof(testNull));

let testUndefinied;
console.log(testUndefinied);
console.log(typeof(testUndefinied));

var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3, 5);
var fourth_array = new Array(3, 5, "Seville", true, third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

console.log(third_array[1]);
console.log(fourth_array[4][0]);

console.log(fourth_array.length);

console.log(fourth_array.push('Spain'));
console.log(fourth_array);

fourth_array.unshift(1);
console.log(fourth_array);

// for (var i = 0; i < fourth_array.length; i++) {
//     console.log('Entramos en la iteración de ' + fourth_array[i]);
// }

// for (var i = fourth_array.length-1; i >= 0; i--) {
//     console.log('Second iteration ' + fourth_array[i]);
// }

// for (;i >= 0; i--) {
//     console.log('Third iteration ' + fourth_array[i]);
// }

fourth_array.forEach(function(element) {
    console.log('Fourth iteration ' + element);
});