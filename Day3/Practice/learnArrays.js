//learn arrays

var fruits = ["apple", "banana", "orange", "grape"];

// Accessing elements in an array
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange

//Length of an array
console.log(fruits.length); // Output: 4

let lengthofFruitArray = fruits.length;
console.log(lengthofFruitArray); // Output: 4

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits.push("watermelon"); // Adding an element to the end of the array
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

//pop
fruits.pop(); // Removing the last element from the array
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.unshift("Mango"); // Adding an element to the beginning of the array
console.log(fruits); // Output: ["Mango", "apple", "banana", "orange", "grape", "kiwi"]

fruits.shift(); // Removing the first element from the array
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

//sort
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "grape", "kiwi", "orange"]  

fruits.reverse();
console.log(fruits); // Output: ["orange", "kiwi", "grape", "banana", "apple"]