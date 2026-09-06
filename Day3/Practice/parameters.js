
//declare function without parameters
function greet() {
  console.log("Hello!");
}


//declare a function with parameters
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet(); // Output: Hello!
// greet("Alice", 25); // Output: Hello, Alice! You are 25 years old


function addNumbers() {
    let a = 10
    let b = 20
    let c = a + b
//   return c;
console.log(c);
}

console.log(addNumbers()); // Output: 30