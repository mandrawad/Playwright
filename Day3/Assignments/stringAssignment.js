let str = "MALAYALAM"

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function isPalindrome(str) {
    let reversedStr = reverseString(str);
    return str === reversedStr;
}

console.log("Reversed String: " + reverseString(str)); // Output: MALAYALAM
console.log("Is Palindrome: " + isPalindrome(str)); // Output: true