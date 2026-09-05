//string object
let strObj = new String("Hello, World!");
console.log(strObj);
console.log(typeof strObj); // Output: object

//String literal
let strLiteral = "Hello, World!";
console.log(strLiteral);
console.log(typeof strLiteral); // Output: string

//template literals
var firstname = "John";
var age = 30;
var message = `My name is ${firstname} and I am ${age} years old.`;
console.log(message); // Output: My name is John and I am 30 years old.

//charAt(): to get the character at a specific index in a string
let myName = "Manjunath";
console.log(myName.length); // Output: 10

console.log(myName.charAt(0)); // Output: M


//indexOf(): to find the index of a specific character or substring in a string
console.log(myName.indexOf("na")); // Output: 3
console.log(myName.lastIndexOf("n")); // Output: 8

//subString(): to extract a portion of a string
let str = "Hello, World!";
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.slice(-1)); // Output: !
console.log(str.slice(-13, -7)); // Output: World
function isValidEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

console.log(isValidEmail("john@example.com")); // Output: true


//split(): to split a string into an array of substrings based on a specified delimiter
let sentence = "This is a sample sentence.";
let words = sentence.split(" ");
console.log(words[0]); // Output: "This"
console.log(words[1]); // Output: "is"
console.log(words[2]); // Output: "a"
console.log(words[3]); // Output: "sample"
console.log(words[4]); // Output: "sentence."
console.log(words.length); // Output: 5
console.log(words); // Output: ["This", "is", "a", "sample", "sentence



//typescript will convert some data type to another data type automatically. This is called type coercion. For example, if you try to add a number and a string, TypeScript will convert the number to a string and concatenate the two values together.
//type coercion
let num1 = 10;
let str2 = "20";
let result = num1 + str2;
console.log(result); // Output: "1020" Here number is converted to string and then concatenation is performed.
console.log(typeof result); // Output: string
console.log(num1 + Number(str2)); // Output: 30
console.log(num1 - Number(str2)); // Output: -10 Here String is converted to number and then subtraction is performed.

let str3 = "Ten";
let num2 = "20";
let result2 = str3 - num2;
console.log(result2);